class GitHub {
    constructor() {
        this.client_id = 'eae775f642b78c93b256';
        this.client_secret = '858a8856113ff079359bb962738085645cfc211d';
        this.repos_count = '5';
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResp = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResp = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResp.json();
        const repos = await reposResp.json();

        console.log(profile);

        return {
            profile,
            repos
        }
    }
}