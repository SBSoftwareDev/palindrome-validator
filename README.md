# Palindrome Validator

This program is designed to validate a palindrome, that is to see if a string reads the same *forwards* as *backwards*. Taking a normal sentence as a string variable, I'm able to work with any sort of **punctuation** or **whitespace** (by work with, I mean absolutely *ignore*). A common theme with a lot of these small code snippets is that they're neat to look at and mess around with, however most have little bearing outside of their novelty. Maybe I'm just getting my repository count up? Either way, win for me, win for the viewer (assuming you don't think this is a dull write up).

## My Implementation

The nature of a palindrome allows us to split it in half and get a mirrored image. Reversing the second half should net us an identical portion. One of thing biggest things you should look out for when tackling this problem is the length of the text you're working with. 

Starting off, I use a Regular Expression to match only the alphanumeric characters, as I want to ignore any punctuation and whitespace. I obtain the first half of the string with the **slice** method, getting all of the *matched* characters up to the middle of the string. The **Math.floor** method takes care of odd numbers, as explained below. 

    Let's take an odd length string, say 9 characters long. 
    The slice method requires an integer, so a value of 4.5 won't help us find which index to use.
    We use the **floor** method instead of **ceil** because strings and arrays in JavaScript are zero-based. 

        Values  - [ A, B, C, D, E, F, G, H, I]
        Indices - [ 0, 1, 2, 3, 4, 5, 6, 7, 8]
        
    We can see that '4' is the central value in this example, the integer *below* the middle. 


In odd length cases, the central character is essentially left alone. Everything surrounding it should be identical. Another benefit of the **slice** method is that does ***not*** include the ending character. As in the example above, relating the central index gives everything up to, but not including that character, which is necessary for the comparison.

If there is an even amount, I can split it directly in two and analyze the halves. 

From there, a simple returned comparison completes the intended function of the program.

## Want to try it out?
Here are three ways to run my program, in order of complexity:

1) Use my website! [Click here](https://www.DeveloperSean.com) to see what it's all about!

2) Use an online JavaScript compiler.
    - Copy and paste my code into [Programiz](https://www.programiz.com/javascript/online-compiler/) and give it the beans!

3) Download the project yourself and build upon it! 

---

### Option 3: Advanced Users Only
Want to take a deeper dive into the Matrix? Here's how you can get set up with customizing 
this program and see what sort of mistakes you can make (it's all apart of the process!)  

**You'll Need:**

* [**Visual Studio Code**](https://code.visualstudio.com/) (*An environment to write your own programs! It's free!*)

* [**Node.JS**](https://nodejs.org/en) (*So you can execute JavaScript code on your machine, rather than through a web browser! Also free!*)

After installing the above programs, make a new folder in any directory for this project.  

Download *main.js* into the new project folder, and open the file in VS Code.  

In VS, open the integrated terminal with Ctrl+`, or open through the 'View' tab. **Alternatively, you can open your local command line (CMD on Windows).**  
- *In EITHER terminal, be sure you are working in the directory of 'main.js'*  

Entering the following command will run the program. Huzzah!

```
node main.js
```

Thanks for reading, and good luck out there!
---
> See any issues? [Let me know!](https://www.DeveloperSean.com)