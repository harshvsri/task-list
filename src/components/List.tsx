interface Props {
  list: string[];
  onClick: (task: string) => void;
}

function List({ list, onClick }: Props) {
  return (
    <>
      <div className="m-5">
        {list.map((item, index) => (
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
            key={index}
          >
            {item}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => onClick(item)}
            ></button>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
