module.exports = io => {
  io.on("connection", socket => {
    console.log("Usuario Connectado");
    socket.on("status", () => {
      console.log("emit");
      socket.emit("status");
      socket.broadcast.emit("status");
    });
  });
};