const skills = [
    {id: 1, skill: 'HTML'},
    {id: 2, skill: 'CSS'},
    {id: 3, skill: 'JavaScript'},
    {id: 4, skill: 'Express'}
  ];
  
module.exports = {
    getAll,
    getOne,
    create
};
  
function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}