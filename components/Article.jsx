const Article = ({ project }) => {
  return (
    <article>
      <a className="image fit">
        <img src={` ${project ? project.image[0].url : ""} `} alt="" />
      </a>
    </article>
  );
};

export default Article;
