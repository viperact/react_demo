import { Link } from 'react-router-dom';

const TableRow = (props) => {
  const { board, currentPage } = props;

  return (
    <tr key={board.num}>
      <td>
        {/* 답변글일때 */}
        {board.re_level > 0 ? (
          <>
            <img
              src='/images/level.gif'
              width={20 * board.re_level}
              height='15'
            />
            <img src='/images/re.gif' />
          </>
        ) : null}
        <Link to={`/board/view/${currentPage}/${board.num}`}>
          {board.subject}
        </Link>
      </td>
      <td>{board.writer}</td>
      <td>{board.readcount}</td>
    </tr>
  );
};

export default TableRow;
