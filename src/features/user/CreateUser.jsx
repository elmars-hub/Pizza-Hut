import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;

    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center">
        <p className="text-lg text-stone-600 mb-6">
          👋 Welcome! Please start by telling us your name:
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input w-full text-center text-lg"
            autoFocus
          />
          {username && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <span className="text-green-500 text-xl">✓</span>
            </div>
          )}
        </div>

        {username !== '' && (
          <div className="scale-in">
            <Button type="primary" className="w-full text-lg py-4">
              🚀 Start Ordering
            </Button>
          </div>
        )}
      </div>
    </form>
  );
}

export default CreateUser;
