const Blog = () => {
  return (
    <div className="w-full bg-zinc-100 py-5 md:py-10 lg:py-16 mb-5">
      <div className="w-11/12 md:w-4/5 mx-auto space-y-5 my-5 md:my-10 lg:my-16">
        <h1 className="font-bold">
          Q - 1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <p>
          <h1 className="font-bold">Ans:</h1>
          <span className="font-bold">Access Token :</span> An access token is a
          credential which authorizes of accessing specific data for specific
          user. <br />
          <span className="font-bold">Refresh Token : </span>A refresh token is
          a credential which is used to obtain a new access token when the old
          access token is expired. <br />
          <span className="font-bold">
            Working Process of access token and refresh token :{" "}
          </span>{" "}
          The application receives an access token after an user successfully
          authenticates and authorizes access and then passes the access token
          as a credential when it calls the target API. <br />
          A refresh token enables a client for an API to retrieve new access
          token without requiring the user to perform a complete login. An
          application can exchange a valid refresh token for a new access token.{" "}
          <br />
          <span className="font-bold">Storing Method : </span>Access token and
          refresh token can be stored in local storage and cookies. The most
          secure way to store a access token or refresh token is to store them
          in the cookies.
        </p>
        <h1 className="font-bold">
          Q - 2. What is express js? What is Nest JS?
        </h1>
        <h1 className="font-bold">Ans:</h1>
        <p>
          <span className="font-bold">Express js : </span>Express js is a web
          application framework for node.js, a server side javascript runtime.
          It is commonly known as Express. <br />
          <span className="font-bold">Nest js : </span> Nest js is a framework
          for building scalable and maintainable server side applications using
          typescript and javascript.
        </p>
      </div>
    </div>
  );
};

export default Blog;
