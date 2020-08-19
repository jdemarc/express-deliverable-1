const skills = [
    {id: 1, skill: 'HTML', description: 'Swine sausage pig, picanha leberkas chuck jowl cupim jerky drumstick ham hock.'},
    {id: 2, skill: 'CSS', description: 'Ham ribeye tongue, beef ribs rump shank jowl ham hock capicola chislic leberkas jerky cow.'},
    {id: 3, skill: 'JavaScript', description: 'Kevin ham turducken burgdoggen corned beef, hamburger sausage.'},
    {id: 4, skill: 'Express', description: 'Tri-tip cupim shoulder, pancetta salami kevin pastrami short loin fatback shankle.'}
  ];
  
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(s => s.id === parseInt(id));
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(s => s.id === parseInt(id));
    skills.splice(idx, 1);
}

function update(id, updatedSkill) {
    const skill = skills.find(s => s.id === parseInt(id));

    Object.assign(skill, updatedSkill);
}