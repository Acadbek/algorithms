const user = document.querySelector('#user-name');
const btn = document.querySelector('#emoji-btn');
const emojies = ["😆", "😅", "🤣", "😂", "😀", "🤑", "🤨", "🙂", "😊", "😗", "😛", "😏", "🤥", "😴", "🥺", "😧", "🤗", "🤩",
    "😎", "🥳", "😍", "😱", "🤓", "😷", "🥴", "😳", "🤯", "🤫", "🤑", "😪", "😴", "😵", "😶‍🌫️", "🥵", "🥶", "😳", "🤪", "😵", "🥴",
    "😵‍💫", "😠", "😡", "🤮", "🤢", "🤒", "😷", "🤬", "🤧", "😇", "🥳"];

const names = ['John', 'Jane', 'Mary', 'Mark', 'Bob', 'Tom', 'Sam', 'Alex', 'Mike',
    'Sara', 'Linda', 'Sophia', 'Olivia', 'Emma', 'Emily', 'Jessica', 'Natalie', 'Sophie',
    'Ava', 'Isabella', 'Mia', 'Charlotte', 'Amelia', 'Grace', 'Zoe', 'Lily', 'Ella', 'Evie',
    'Lucy', 'Isla', 'Poppy', 'Daisy', 'Layla', 'Lilly', 'Emily', 'Madeleine', 'Charlotte',
    'Harper', 'Scarlett', 'Sofia', 'Aria', 'Isabella', 'Evelyn', 'Abigail', 'Madison', 'Elizabeth',
    'Chloe', 'Mila', 'Aubrey', 'Ellie', 'Hannah', 'Ella', 'Scarlett', 'Isla', 'Poppy', 'Daisy',
    'Layla', 'Lilly', 'Emily', 'Madeleine', 'Charlotte', 'Harper', 'Scarlett', 'Sofia', 'Aria',
    'Isabella', 'Evelyn', 'Abigail', 'Madison', 'Elizabeth', 'Chloe', 'Mila', 'Aubrey', 'Ellie',
    'Hannah', 'Ella', 'Scarlett', 'Isla', 'Poppy', 'Daisy', 'Layla', 'Lilly', 'Emily', 'Madeleine',
    'Charlotte', 'Harper', 'Scarlett', 'Sofia', 'Aria', 'Isabella', 'Evelyn', 'Abigail',
    'Madison', 'Elizabeth', 'Chloe', 'Mila', 'Aubrey', 'Ellie', 'Hannah', 'Ella', 'Scarlett',
    'Isla', 'Poppy', 'Daisy', 'Layla', 'Lilly', 'Emily', 'Madeleine', 'Charlotte', 'Harper', 'Scarlett',
    'Sofia', 'Aria', 'Isabella', 'Evelyn', 'Abigail', 'Madison', 'Elizabeth', 'Chloe', 'Mila', 'Aubrey',
    'Ellie', 'Hannah', 'Ella', 'Scarlett', 'Isla'];

btn.addEventListener('mouseover', () => {
    btn.innerText = emojies[Math.floor(Math.random() * emojies.length)];
    user.innerHTML = names[Math.floor(Math.random() * names.length)];
})

btn.addEventListener('click', () => {
    btn.innerText = emojies[Math.floor(Math.random() * emojies.length)]
    user.innerHTML = names[Math.floor(Math.random() * names.length)];
})
