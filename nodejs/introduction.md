# Topics for Introduction

# Introduction to Core concepts

## 0. todays model (threads).
Pros
 * new thread per client or request (multiple threads per process)
 * threads share resources of a process
 * execute independently
 * concurrent execution
 * great for intense algorithms and long running processes (independent of i/o) 
 
Cons
 * difficult to work with
 * memory heavy (default is 512KB | -Xss )
 * thread limits (this is when the actual waiting begins)
 
References:
 * http://httpd.apache.org/docs/2.0/mod/worker.html
 
 
 
## 1. web server 
 * really! - i'll make my point soon.
 * serve static resources
 * serve static web pages
 * serve "dynamic" web pages (stateless time machine :)
 * serve lots of stuff to lots of people - i/o

 * in from a file system, out to the network
 
 
 
## 3. non-blocking i/o model: http://www.kegel.com/c10k.html
 * single thread always
 * everything runs in parallel, except your code
 * every function that performs an i/o operation will end with a callback

References:
 * http://nikhilm.github.io/uvbook/An%20Introduction%20to%20libuv.pdf

## 4. putting it together
consider a traditional system using todays model and for simplicity let's say your system has a max of 2 threads and is attempting to show the results of a 10 second query.  the first two requests in would grab the two available threads:
    1. prepare the query 
    2. execute the query
    3. wait
    4. process the results
    5. write the response
    6. release the thread

any other requests are waiting until step 6 is complete and a thread becomes available (initially 10 seconds but consider a buildup of myriad request).  additionally it takes time to create and release threads.

[ diagram ]



now consider a non-blocking i/o model for this exact same scenario.  each request is thrown into an event loop and executed sequentially.  however, the "wait" is replaced by a non-blocking i/o operation.
    1. prepare the query
    2. execute the query
    3. async wait
    4. process the results
    5. write the response

any other requests are processed in the order in which they are received (almost immediately).  this means that while each request waits for the query, they minimally wait for each other (remember that everything runs in parallel except your code.  

[ diagram ]


References:
 * http://blog.mixu.net/2011/02/01/understanding-the-node-js-event-loop/

## 1. Performance & Scalability: https://www.paypal-engineering.com/2013/11/22/node-js-at-paypal/
 * a single thread with n processes
 * the 

# Intoduction to Node.js
0. What is Node.js
1. Hello World to the console.
2. Hello World to the web.
3. Package JSON - Understanding how modules are pulled in.
4. Non-blocking IO: http://www.kegel.com/c10k.html
    * every function that performs an IO operation will end with a callback
5. 
6. 

Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.