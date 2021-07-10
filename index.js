const form = document.querySelector('.form');
const currentOutput = document.querySelector('.current-task__output');
const doneOutput = document.querySelector('.done-tasks__output');
const input = document.querySelector('.input');
const template = document.querySelector("#current-item");
const listItemTemplate = template.content;



function addListItem() {
    const cloneContent = listItemTemplate.cloneNode(true);
    const paragraph = cloneContent.querySelector('.list-item__paragraph');
    paragraph.textContent = input.value;
    const crossButton = cloneContent.querySelector('.cross-button');
    const deleteButton = cloneContent.querySelector('.delete-button');


    crossButton.addEventListener('click',(evt)=>{
        evt.target.classList.toggle('cross-button_focused');
        if(evt.target.classList.contains('cross-button_focused')) {
            paragraph.classList.add('text');
            doneOutput.appendChild(evt.target.closest('.list-item'));
        }
        else {
            paragraph.classList.remove('text');
            currentOutput.appendChild(evt.target.closest('.list-item'));
        }
        
    });
    
    
    currentOutput.append(cloneContent);


    deleteButton.addEventListener('click', (evt)=> {
        evt.target.closest('.list-item').remove();
    });
}


form.addEventListener('submit', (evt)=> {
    evt.preventDefault();
    addListItem();
    form.reset();
});