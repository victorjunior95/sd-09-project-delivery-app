import { io } from 'socket.io-client';

const socket = io('http://localhost:3001'); // 37 e 38 falhando mas 26 e 27 passando, hora reverte

export default socket;
