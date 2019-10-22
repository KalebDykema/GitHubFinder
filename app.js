// Init GitHub
const github = new GitHub;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('search-user');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        // Make HTTTP call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                // Show alert
                ui.showAlert('User Not Found', 'alert alert-danger');
            } else {
                // Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        // Clear profile when query is empty
        ui.clearProfile();
    }
});