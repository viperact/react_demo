import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import TableRow from './table_row';
import axios from 'axios';
import { baseUrl } from '../../commonApi/todoApi';
import PageNavigation from './page_nav';

const Boardlist = () => {
  const [boardList, setBoardList] = useState([]);
  const [pv, setPv /* 페이지값 저장 */] = useState({ currentPage: 1 });
  const { currentPage } = useParams();

  useEffect(() => {
    console.log('dd:' + currentPage);
    getList(currentPage ? currentPage : 1);
  }, []);

  // async 동기화처리
  const getList = async (currentPage) => {
    console.log('currentPage:', currentPage);
    await axios.get(baseUrl + '/board/list/' + currentPage).then((response) => {
      // console.log(response.data);
      setBoardList(response.data.aList);
      setPv(response.data.pv);
    });
  };
  return (
    <div>
      <Link className='btn btn-danger' to='/board/write'>
        글쓰기
      </Link>

      <h3 className='text-center'>게시판 목록</h3>
      <table className='table table-striped' style={{ marginTop: 20 }}>
        <colgroup>
          <col width='8%' />
          <col width='*' />
          <col width='12%' />
          <col width='12%' />
        </colgroup>

        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
          </tr>
        </thead>

        <tbody>
          {boardList.map((board) => {
            return (
              <TableRow
                board={board}
                currentPage={pv.currentPage}
                key={board.num}
              />
            );
          })}
        </tbody>
      </table>

      {pv ? (
        <PageNavigation
          currentPage={pv.currentPage}
          startPage={pv.startPage}
          endPage={pv.endPage}
          blockPage={pv.blockPage}
          totalPage={pv.totalPage}
          getList={getList}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Boardlist;
