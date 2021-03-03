const internTemplate =
`<div class="card" >
    <div class="card-header bg-primary text-white">
        <h5 class="card-title">{{name}}</h5>
        <h6>Intern</h6>
    </div>
    <ul class="list-group">
        <div class="card-body">
            <li class="list-group-item">Id: <span>{{id}}</span></li>
            <li class="list-group-item">Email: <a href="mailto:{{email}}">{{email}}</a></li>
            <li class="list-group-item">School: <span>{{school}}</span></li>
        </div>
    </ul>
</div>`

module.exports = internTemplate;