const formatMessageDate = (createdAt) => {
    const dateTime = new Date(createdAt);
    const formattedDate = dateTime.toLocaleDateString();
    const formattedTime = dateTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${formattedDate} - ${formattedTime}`;
  };
  
  export default formatMessageDate;