const addBtn = document.querySelector('button.btn-criar');
const inputBar = document.querySelector('input#tarefa');
const tasks = document.querySelector('ul');
const errorMsg = document.querySelector('span#errorMsg');
let taskNumbs = 0;
let count = document.querySelector('p#contagem');
function totalNotes(){
    if (taskNumbs !== 1){
            count.innerText = `${taskNumbs} notas`
        } else {
            count.innerText = `${taskNumbs} nota`
        }
}

addBtn.addEventListener('click', function(e){
    if (inputBar.value.trim() === ''){
        errorMsg.textContent = 'Nada foi adicionado.'
    } else {
        taskNumbs++;
        totalNotes();

        errorMsg.textContent = '';
        tasks.classList.add('bottom');
        const newTask = document.createElement('li');
        tasks.appendChild(newTask);

        const lista = document.createElement('div');
        lista.classList.add('lista');
        newTask.appendChild(lista);

        const checkbox = document.createElement('input');
        checkbox.classList.add('checkbox');
        checkbox.setAttribute('type', 'checkbox');
        lista.appendChild(checkbox);

        const listTitles = document.createElement('div');
        listTitles.classList.add('list-title');
        lista.appendChild(listTitles);

        let title = document.createElement('p');
        let titleDate = document.createElement('span');
        const editDate = new Date();
        const dateForm = editDate.toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
        title.textContent = inputBar.value.trim();
        titleDate.textContent = dateForm;
        listTitles.appendChild(title);
        listTitles.appendChild(titleDate);

        const delBtn = document.createElement('button');
        delBtn.classList.add('del-btn');
        delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
        newTask.appendChild(delBtn);
        inputBar.value = '';

        delBtn.addEventListener('click', function(e) {
            tasks.removeChild(newTask);
            taskNumbs--;
            totalNotes();

            if (taskNumbs == 0){
                tasks.classList.remove('bottom');
            }
        })
    }
})