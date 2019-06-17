const randomName = () => {
    const behaviours = ['Innocent', 'Wild', 'Chilling', 'Happy', 'Frightening', 'Lonenly', 'Surprise', 'Amused', 'Giant', 'Shy', 'Smiling', 'Hiding'];
    const names = ['Panda', 'Bear', 'Lion', 'Leopard', 'Wolf', 'Fox', 'Hippopotamus', 'Rhinoceros', 'Raccoon','Cat', 'Elephant', 'Horse', 'Tiger', 'Deer'];
    return `${behaviours[Math.floor((behaviours.length - 1) * Math.random())]} ${names[Math.floor((names.length - 1) * Math.random())]}`;
}

export default randomName;