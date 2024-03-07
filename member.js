function skillsMember(){
    var skills = ['HTML', 'CSS', 'JS', 'React', 'Node.js', 'Python', 'Django', 'Ruby', 'Rails', 'Java', 'Spring', 'C', 'C++', 'C#', 'Go', 'Swift', 'Kotlin', 'Rust', 'Scala', 'Haskell', 'Perl', 'PHP', 'Laravel', 'Vue.js', 'Angular', 'Ember', 'Backbone', 'Express', 'Flask', 'Sinatra', 'Rails', 'Django', 'Spring', 'Laravel', 'Flask', 'Express', 'Ruby', 'Python', 'Java', 'C', 'C++', 'C#', 'Go', 'Swift', 'Kotlin', 'Rust', 'Scala', 'Haskell', 'Perl', 'PHP', 'Vue.js', 'Angular', 'Ember', 'Backbone', 'React', 'Node.js'];
    var member = ['HTML', 'CSS', 'JS', 'React', 'Node.js', 'Python', 'Django', 'Ruby', 'Rails', 'Java', 'Spring', 'C', 'C++', 'C#', 'Go', 'Swift', 'Kotlin', 'Rust', 'Scala', 'Haskell', 'Perl', 'PHP', 'Laravel', 'Vue.js', 'Angular', 'Ember', 'Backbone', 'Express', 'Flask', 'Sinatra', 'Rails', 'Django', 'Spring', 'Laravel', 'Flask', 'Express', 'Ruby', 'Python', 'Java', 'C', 'C++', 'C#', 'Go', 'Swift', 'Kotlin', 'Rust', 'Scala', 'Haskell', 'Perl', 'PHP', 'Vue.js', 'Angular', 'Ember', 'Backbone', 'React', 'Node.js'];
    var result = [];
    for(var i = 0; i < skills.length; i++){
        if(member.indexOf(skills[i]) === -1){
            result.push(skills[i]);
        }
    }
    return result;
}