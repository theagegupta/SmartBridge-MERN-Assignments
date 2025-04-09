import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running on port 5000');
});

// Task: 4 of assignment

app.get('/welcome',(req,res)=>{
    res.json({message:"Welcome to Express!"})
})

// Task: 5

let users = [
    {id:1, name:"Ayush", email:"ayush@example.com"},
    {id:2, name:"Radha", email:"radha@example.com"}
];


// get Users - returns all the user data
app.get('/users',(req, res)=>
{
    res.json(users);
})

// POST /users - Add a new user
app.post('/users', (req, res) => {
    const { id, name, email } = req.body;
    users.push({ id, name, email });
    res.status(201).json({ message: "User added", users });
  });
  
  // PUT /users/:id - Update user details
  app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
    users = users.map(user =>
      user.id === userId ? { ...user, name, email } : user
    );
    res.json({ message: "User updated", users });
  });
  
  // DELETE /users/:id - Delete user
  app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(user => user.id !== userId);
    res.json({ message: "User deleted", users });
  });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


