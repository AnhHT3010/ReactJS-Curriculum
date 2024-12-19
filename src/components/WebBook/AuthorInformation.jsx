import BookOfAuthor from "./BookOfAuthor";

const AuthorInformation = () => {
  return (
    <div className="flex flex-row">
      <div>
        <p>FEATURED AUTHOR</p>
        <h2>Hailey Nguyen</h2>
        <p className="whitespace-pre-line text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div>
        <img src="https://lh3.googleusercontent.com/BxRNSLEenedtHgbQXEc0WkR-YzJXWFo-emOAn-7el1kxHtwFBQETTcQhcOXoboUHDTYttKzI0Afre1RvJd5TfVzacSpVgIoiBg" />
      </div>
      <BookOfAuthor />
    </div>
  );
};

export default AuthorInformation;
