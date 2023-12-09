function Avatar({ url, size, avatar_url }) {


  return (
    <>
      <img
        src={url || avatar_url}
        alt="Avatar"
        className="avatar"
        style={{
          height: size,
          width: size,
          borderRadius: "50%",
        }}
      />
    </>
  );
}

export default Avatar;
