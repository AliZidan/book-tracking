import classes from './DropDown.module.css';

const DropDown = (props: {
  currentShelf: string,
  bookId: string,
  handleShelfChange: React.ChangeEventHandler<HTMLSelectElement>
}) => {

    const shelfs = [{
        text: 'Currently Reading',
        value: 'currentlyReading'
    },
    {
        text: 'Want to Read',
        value: 'wantToRead'
    },
    {
        text: 'Read',
        value: 'read'
    }];

  return (
    <div className={classes["book-shelf-changer"]}>
    <select  value={props.currentShelf} onChange={props.handleShelfChange} >
      <option value="none" disabled>
        Move to...
      </option>
      {
        shelfs.map((shelf) => {
            return <option key={shelf.value} value={shelf.value}>
            {shelf.text}
          </option>
        })
      }
    </select>
  </div>
  );
};

export default DropDown;
