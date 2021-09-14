const getColorStatus = (status) => {
  console.log(status);
  if (status === 'Pendente') {
    return 'bg-yellow';
  }

  if (status === 'Preparando') {
    return 'bg-green-ligth';
  }

  if (status === 'Entregue') {
    return 'bg-green';
  }
  if (status === 'Em Trânsito') {
    return 'bg-yellow';
  }
};

module.exports = {
  getColorStatus,
};
