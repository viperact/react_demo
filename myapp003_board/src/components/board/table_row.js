const TableRow = (props) => {
  const { board, currentPage } = props;

  return (
    <tr key={board.num}>
      <td>{board.subject}</td>
      <td>{board.writer}</td>
      <td>{board.readcount}</td>
    </tr>
  );
};

export default TableRow;
