import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mt-2 mb-2">
            <h2>Difference between javascript and nodejs ?</h2>
            <p>
              <ins>
                <span style={{ color: "red" }}>Javascript : </span>
              </ins>
              JavaScript is a programming language. It is running in any web
              browser with a proper browser engine.Mainly using for any
              client-side activity for a web application, like possible
              attribute validation or refreshing the page in a specific interval
              or provide some dynamic changes in web pages without refreshing
              the page. JavaScript running any engine like Spider monkey
              (FireFox), JavaScript Core (Safari), V8 (Google Chrome).{" "}
              <ins>
                <span className="underline" style={{ color: "red" }}>
                  {" "}
                  Node JS :{" "}
                </span>
              </ins>
              It is an interpreter and environment for JavaScript with some
              specific useful libraries which JavaScript programming can use
              separately.It mainly used for accessing or performing any
              non-blocking operation of any operating system, like creating or
              executing a shell script or accessing any hardware-specific
              information or running any backend job.Node JS only run in a V8
              engine which mainly used by google chrome. And javascript program
              which will be written under this Node JS will be always run in V8
              Engine.
            </p>
          </div>

          <div className="mt-2 mb-2">
            <h2>
              When should you use node js and when should you use mongodb ?
            </h2>
            <p>
              Nodejs is a Javascript engine that you can write any application
              you want with (by programming in the Javascript language). It runs
              your Javascript code. Most commonly, it is used to build servers
              that can respond to web requests, though it can be used for lots
              of other types of code too. MongoDB is a database engine. Code
              within some application or server uses MongoDB to save, query or
              update data in a database. There are many web servers built with
              nodejs that will then use MongoDB for storing data.Any project
              needs a programming environment and a runtime library that offers
              you basic programming tools/support and can compile and/or
              interpret your code. Nodejs is such as tool for the Javascript
              programming language. So, if you want to write some kind of
              stand-alone program or server in Javascript, then you can use
              nodejs for it, And If your application needs the ability to
              persistently store data in a way that you can efficiently query or
              update it later, then you would typically use some form of
              database. There are dozens of popular databases. MongoDB is one
              such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS),
              Postgres are examples of other databases. Different databases have
              different strengths (things they are best at) and different ways
              of using them so it's a whole different question to choose the
              right/best database for what you're doing
            </p>
          </div>
          <div className="mt-2 mb-2">
            <h2>Difference between SQL and NoSQL ?</h2>
            <p>
              <ins>
                <span style={{ color: "red" }}> SQL : </span>
              </ins>
              RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases are
              not suited for hierarchical data storage.These databases are best
              suited for complex queries. Vertically Scalable & Follows ACID
              property.{" "}
              <ins>
                <span style={{ color: "red" }}> NoSQL : </span>
              </ins>
              Non-relational or distributed database system. These databases are
              best suited for hierarchical data storage. These databases are not
              so good for complex queries. Horizontally scalable & Follows
              CAP(consistency, availability, partition tolerance)
            </p>
          </div>
          <div className="mt-2 mb-2">
            <h2>What is the purpose of jwt and how does it work ?</h2>
            <p>
              <ins>
                <span style={{ color: "red" }}>Jwt : </span>
              </ins>
              JSON Web Token , JSON stands for JavaScript Object Notation and is
              a text-based format for transmitting data across web applications.
              It stores information in an easy-to-access manner, both for
              developers and computers. It can be used as a data format by any
              programming language and is quickly becoming the preferred syntax
              for APIs, surpassing XML.JWTs differ from other web tokens in that
              they contain a set of claims. Claims are used to transmit
              information between two parties. What these claims are depends on
              the use case at hand. For example, a claim may assert who issued
              the token, how long it is valid for, or what permissions the
              client has been granted. A JWT is a string made up of three parts,
              separated by dots (.), and serialized using base64. In the most
              common serialization format, compact serialization, the JWT looks
              something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get
              two JSON strings: The header and the payload and also The
              signature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
