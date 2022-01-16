# Review Comments

App.js 

1. Import the hook, and dependency from react should be combined. 
2. You can change FaPlusSquare to meaningful name
3. Should change var to const because 
   1. var is hosted, and if there is some accident, the App will be defined as undefined. 
   2. consistency - var is old javascript style, and no consistency with es6 or newer ones you are using in code, cause confusion
      for other developers who will work on your code
   3. const is better used, since you don't want anyone to change it accidentally.

4. Should not use the DOM manipulation or jquery in react since it will change the virtual DOM

5. You should not handle DOM manipulation in react for following reasons 
   1. it will manipulate the virtual DOM directly, which is not highly          recommended. 
   2. error prone and hard to maintain
   3. The purpose of react is to replace jquery
   4. If you use that DOM manipulation in components, that piece of code        can't become re-usable
   5. Use controlled component
    
6. Duplicated code
7. style should not be added like this in FaPlusSquare
8. export default is not consistent. 
9. Group MdCheckBox and MdCheckBoxOutlineBlank into a variable, since it will be a mess if there are so many components. 




   