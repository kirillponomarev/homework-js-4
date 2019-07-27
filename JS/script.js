const Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
};

const notepad = {
    notes: [],
    getNotes() {
        return notepad.notes;
    },

    findNoteById(id) {
        for (let note of notepad.notes) {
            if (note.id === id) 
            return note;
        }


    },

    saveNote(note) {
        notepad.notes.push(note);
        return note;
    },

    deleteNote(id) {
        for (let note of notepad.notes) {
            if (note.id === id) {
                let idNote = notepad.notes.indexOf(note);
                notepad.notes.splice(idNote, 1);
            }
        }

    },

    updateNoteContent(id, updatedContent) {
        let newNote = {};
        let idNewNote;
        for (let note of notepad.notes) {
            if (note.id === id) {
                idNewNote = notepad.notes.indexOf(note);
                newNote = {...note, ...updatedContent};
                notepad.notes[idNewNote] = newNote;
            }
        }
        return newNote;
    },

    updateNotePriority(id, priority) {
        let newNote = {};
        for (let note of notepad.notes) {
            if (note.id === id) {
                note.priority = priority;
                newNote = note;
            }
        }
        return newNote;
    },

    filterNotesByQuery(query) {
        let listOfNotes = [];
        for (let note of notepad.notes) {
            let changeTitle = note.title.toLowerCase();
            let changeBody = note.body.toLowerCase();
            if (changeTitle.includes(query) || changeBody.includes(query)) {
                listOfNotes.push(note)
            }
        }
        return listOfNotes;
    },

    filterNotesByPriority(priority) {
        let listOfNotes = [];
        for (let note of notepad.notes) {
            if (note.priority === priority) {
                listOfNotes.push(note)
            }
        }
        return listOfNotes;
    },
};

notepad.saveNote({
    id: 'id-1',
    title: 'JavaScript essentials',
    body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: Priority.HIGH,
});

notepad.saveNote({
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: Priority.NORMAL,
});

notepad.saveNote({
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body: 'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: Priority.NORMAL,
});

notepad.saveNote({
    id: 'id-4',
    title: 'Winter clothes',
    body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: Priority.LOW,
});

console.log('Все текущие заметки: ', notepad.getNotes());

notepad.updateNotePriority('id-4', Priority.NORMAL);

console.log(
    'Заметки после обновления приоритета для id-4: ',
    notepad.getNotes(),
);

notepad.updateNotePriority('id-3', Priority.LOW);

console.log(
    'Заметки после обновления приоритета для id-3: ',
    notepad.getNotes(),
);

console.log(
    'Отфильтровали заметки по ключевому слову "html": ',
    notepad.filterNotesByQuery('html'),
);

console.log(
    'Отфильтровали заметки по ключевому слову "javascript": ',
    notepad.filterNotesByQuery('javascript'),
);

console.log(
    'Отфильтровали заметки по нормальному приоритету: ',
    notepad.filterNotesByPriority(Priority.NORMAL),
);

notepad.updateNoteContent('id-3', {
    title: 'Get comfy with React.js or Vue.js',
});

console.log(
    'Заметки после обновления контента заметки с id-3: ',
    notepad.getNotes(),
);

notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.getNotes());
