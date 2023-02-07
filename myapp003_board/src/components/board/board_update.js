import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { baseUrl } from '../../commonApi/todoApi';

const BoardUpdate = () => {
  const navigator = useNavigate();
  const { currentPage, num } = useParams();

  const [initBoard, setInitBoard] = useState({});
  const [inputs, setInputs] = useState({
    writer: '',
    email: '',
    subject: '',
    content: '',
    filename: null,
  });

  const { writer, email, subject, content, filename } = inputs;

  //num에 해당하는 데이터 가져오기
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get(`${baseUrl}/board/update/${num}`)
      .then((response) => {
        console.log(response.data);
        setInitBoard(response.data);
        setInputs(response.data);
      })
      .catch((err) => console.error(err.message));
  };

  //수정 글 작성
  const handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    setInputs((prev) => {
      return { ...prev, ...nextState };
    });
  };

  //수정 데이터 보내기
  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    e.preventDefault();
    setInputs({
      ...inputs,
      filename: e.target.files[0],
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('num', num);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('content', content);

    console.log('filename:' + filename);
    if (filename !== null) formData.append('filename', filename);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    await axios
      .put(`${baseUrl}/board/update`, formData, config)
      .then((response) => {
        console.log(response.data);
        setInputs({
          writer: '',
          email: '',
          subject: '',
          content: '',
          filename: null,
        });

        navigator(`/board/list/${currentPage ? currentPage : 1}`);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setInputs(initBoard);
  };

  const handleBack = (e) => {
    e.preventDefault();
    navigator(-1);
  };

  return (
    <div>
      <form name='frm' encType='multipart/form-data'>
        <table className='table table-striped' style={{ marginTop: 20 }}>
          <tbody>
            <tr>
              <th width='20%'>글쓴이</th>
              <td>{initBoard.writer}</td>
              <th width='20%'>등록일</th>
              <td>{initBoard.reg_date}</td>
            </tr>

            <tr>
              <th>제목</th>
              <td colSpan='3'>
                <input
                  type='text'
                  name='subject'
                  id='subject'
                  defaultValue={initBoard.subject}
                  value={subject}
                  onChange={handleValueChange}
                />
              </td>
            </tr>

            <tr>
              <th>메일</th>
              <td colSpan='3'>
                <input
                  type='text'
                  name='email'
                  id='email'
                  defaultValue={initBoard.email}
                  value={email}
                  onChange={handleValueChange}
                />
              </td>
            </tr>

            <tr>
              <th>내용</th>
              <td colSpan='3'>
                <textarea
                  name='content'
                  id='content'
                  rows='13'
                  cols='40'
                  defaultValue={initBoard.content}
                  value={content}
                  onChange={handleValueChange}
                ></textarea>
              </td>
            </tr>

            <tr>
              <th>첨부파일</th>
              <td colSpan='3'>
                <input
                  type='file'
                  name='filename'
                  id='filepath'
                  onChange={handleFileChange}
                />
                <span>{initBoard.upload}</span>
              </td>
            </tr>
          </tbody>
        </table>

        <button className='btn btn-primary' onClick={handleUpdate}>
          수정
        </button>
        <button className='btn btn-primary' onClick={handleReset}>
          취소
        </button>
        <button className='btn btn-primary' onClick={handleBack}>
          뒤로
        </button>
      </form>
    </div>
  );
};

export default BoardUpdate;
