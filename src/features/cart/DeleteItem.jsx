import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <Button 
      type="round" 
      onClick={handleDelete}
      className="w-8 h-8 p-0 flex items-center justify-center bg-gradient-to-r from-red-400 to-red-500 hover:from-red-300 hover:to-red-400 text-white"
    >
      🗑️
    </Button>
  );
};

export default DeleteItem;
