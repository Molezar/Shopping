const InitialState = {
    books: [
        {
            id:0,
            title: 'Джордж Оруел'
        }

    ]
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case 'ADD BOOK':
            return {
                books: action.payload
            };

        case 'SET BOOK':
            return {
                books: [
                    state.books,
                    action.payload  
                ] 
            };
        default:
            return state;
    };
};