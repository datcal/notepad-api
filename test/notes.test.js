const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');
chai.use(chaiHttp);

let token, noteID;

describe('notes test', () => {
	before((done) => {
        this.enableTimeouts(false)
		chai.request(server)
			.post('/users/login')
			.send({mail: 'thedatcal@gmail.com', password: '123456'})
            .catch(function(err) {
                done(err)
            })
			.end((err, res) => {
                if(err)
                    done(err)

				token = res.body.token;
				done();
			});
	});

	describe('/notes/GET notes', () => {
		it('it should GET all the notes', (done) => {
			chai.request(server)
				.get('/notes')
				.set('x-access-token', token)
                .catch(function(err) {
                    done(err)
                })
				.end((err, res) => {
                    if(err)
                        done(err)

					res.should.have.status(200);
					res.body.should.be.a('array');
					done();
				});
		})
	});
    /*

	describe('/notes/POST note', () => {
		it('it should POST a note', (done) => {
			const note = {
				content: 'Lorem Ipsum',
			};

			chai.request(server)
				.post('/notes')
				.send(note)
				.set('x-access-token', token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('content');
					noteID = res.body._id;
					done();
				});
		});
	});

	describe('/GET/notes/:noteID note', () => {
		it('it should GET a note by the given id', (done) => {
			chai.request(server)
				.get('/notes/' + noteID)
				.set('x-access-token', token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('content');
					res.body.should.have.property('_id').eql(noteID);
					done();
				});
		});
	});

	describe('/PUT/notes/:noteID movie', () => {
		it('it should UPDATE a note given by id', (done) => {
			const note = {
				content: 'LOREM IPSUM',
			};

			chai.request(server)
				.put('/notes/' + noteID)
				.send(note)
				.set('x-access-token', token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('content').eql(note.content);
					done();
				});
		});
	});

	describe('/DELETE/notes/:noteID note', () => {
		it('it should DELETE a note given by id', (done) => {
			chai.request(server)
				.delete('/notes/' + noteID)
				.set('x-access-token', token)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('status').eql(1);
					done();
				});
		});
	});*/
});