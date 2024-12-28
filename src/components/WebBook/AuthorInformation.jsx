import BookOfAuthor from "./BookOfAuthor";

const AuthorInformation = () => {
  return (
    <div className="flex flex-row items-start gap-8 p-8">
      <div className="flex-1 text-left">
        <p className="text-red-600 font-semibold text-sm mb-2 uppercase">
          FEATURED AUTHOR
        </p>
        <h2 className="text-4xl font-bold mb-4">Hailey Nguyen</h2>
        <p className="text-base leading-6 whitespace-pre-line">
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

      <div className="flex-shrink-0 w-1/3">
        <img src="https://lh3.googleusercontent.com/BxRNSLEenedtHgbQXEc0WkR-YzJXWFo-emOAn-7el1kxHtwFBQETTcQhcOXoboUHDTYttKzI0Afre1RvJd5TfVzacSpVgIoiBg" />
      </div>

      <BookOfAuthor />
    </div>
  );
};

export default AuthorInformation;
