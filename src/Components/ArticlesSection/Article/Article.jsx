function Article({ imageURL, imageName, title }) {
  return (
    <section className=" flex flex-col items-center h-[480px] min-w-[300px] max-w-[350px] shadow-card">
      <img
        src={imageURL}
        alt={imageName}
        className="w-full h-[60%] object-cover object-center cursor-pointer"
      />
      <span className="border-2 border-black w-[20%] my-10"></span>
      <p className="my-2 text-center">{title}</p>
    </section>
  );
}

export default Article;
