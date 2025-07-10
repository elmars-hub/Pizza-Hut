import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        className="w-8 h-8 p-0 flex items-center justify-center"
      >
        -
      </Button>
      <span className="text-sm font-bold text-stone-800 min-w-[20px] text-center">
        {currentQuantity}
      </span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        className="w-8 h-8 p-0 flex items-center justify-center"
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
