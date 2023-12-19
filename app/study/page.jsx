import React from "react";
import Link from "next/link";

const learn = () => {

    return (
        <div class="relative isolate px-6 pt-14 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Try to guess the answer before opening !</h1>
            <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg mt-8" open>
         <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
         What does RESTful API really means ?
         </summary>
            <div class="mt-3 mr-6 text-sm leading-6 text-slate-600 dark:text-slate-400 text-left">
        <p>-REST (Representational State Transfer) is an architectural style for designing networked applications.</p>
        <p>-RESTful APIs (Application Programming Interfaces) follow REST principles and use standard HTTP methods (GET, POST, PUT, DELETE) for communication.</p>
        <p>-Resources are identified by URIs, and interactions are stateless, meaning each request from a client contains all the information needed to understand and process the request.</p>
            </div>
            </details>

            <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg mt-8" open>
         <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
         What is the purpose of the "box model" in CSS ?
         </summary>
            <div class="mt-3 mr-6 text-sm leading-6 text-slate-600 dark:text-slate-400 text-left">
        <p>-The box model in CSS describes the layout and design of elements on a web page.</p>
        <p>-It consists of content, padding, border, and margin. These components define the dimensions and spacing around an element.</p>
        <p>-Understanding the box model is crucial for proper layout and styling of web pages.</p>
            </div>
            </details>

            <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg mt-8" open>
         <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
         What's the difference between SQL and NoSQL databases ?
         </summary>
            <div class="mt-3 mr-6 text-sm leading-6 text-slate-600 dark:text-slate-400 text-left">
        <p>-SQL (Structured Query Language) databases are relational databases that use a predefined schema and tables to organize data. Examples include MySQL, PostgreSQL, and SQLite.</p>
        <p>-NoSQL databases are non-relational and can handle unstructured or semi-structured data. They include document databases (MongoDB), key-value stores (Redis), and wide-column stores (Cassandra).</p>
            </div>
            </details>

            <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg mt-8" open>
         <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
         What's the purpose of the 'git' version control system ?
         </summary>
            <div class="mt-3 mr-6 text-sm leading-6 text-slate-600 dark:text-slate-400 text-left">
        <p>-Git is a distributed version control system used to track changes in source code during software development.</p>
        <p>-It allows multiple developers to collaborate on a project, maintain a history of changes, and manage different versions of the codebase.</p>
        <p>-Git provides features like branching, merging, and distributed repositories.</p>
            </div>
            </details>

            <details class="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg mt-8" open>
         <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
         What is the difference between HTTP and HTTPS ?
         </summary>
            <div class="mt-3 mr-6 text-sm leading-6 text-slate-600 dark:text-slate-400 text-left">
        <p>-HTTP (Hypertext Transfer Protocol) is the standard protocol for transmitting data over the internet.</p>
        <p>-HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP, adding a layer of encryption (SSL/TLS) to protect data during transmission.</p>
        <p>-HTTPS is commonly used for secure communication in online transactions, login pages, and other sensitive data exchanges.</p>
            </div>
            </details>
            <Link
          href="/"
          className="block mt-8 mb-10 py-2 px-5 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Go Home
        </Link>
        </div>
         
    );
};

export default learn;