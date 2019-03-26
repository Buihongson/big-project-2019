'use strict'

const Producer = use('App/Models/NhaSanXuat');

class ProducerController {
    // show form add new catalog
    async viewAddProducer({ view }) {
        const levels = await Producer.query().where('parent_id', '=', 0).fetch();
        
        return view.render('admin.producer.add_producer', {
            levels: levels.toJSON()
        });
    }

    // show all catalog
    async viewAllProducer({ view }) {
        // get all catalog
        const producers = await Producer.all();

        return view.render('admin.producer.view_producer', {
            producers: producers.toJSON()
        });
    }

    // add a catalog
    async addProducer({ request, response, session, auth }) {
        // create new catalog
        const producer = new Producer();

        // get value from input for catalog
        producer.parent_id = request.input('parent_id');
        producer.ten_th = request.input('name_producer');
        producer.mo_ta_th = request.input('info_producer');

        await producer.save();

        // notify when add success
        session.flash({ add_notification: 'Thêm thành công' });

        return response.redirect('/admin/catalog/view-catalog');
    }

    // view edit a catalog
    async editProducer({ params, view }) {
        // get catalog by id
        const producer = await Producer.find(params.id);

        const levels = await Producer.query().where('parent_id', '=', 0).fetch();

        // console.log(levels.toJSON());
        // console.log(producer.toJSON());

        return view.render('admin.producer.edit_producer', {
            producer: producer.toJSON(),
            levels: levels.toJSON()
        })
    }

    // update a catalog
    async updateProducer({ request, response, session, params }) {
        // get catalog by id
        const producer = await Producer.find(params.id);

        // get value from input for catalog
        producer.ten_th = request.input('name_producer');
        producer.mo_ta_th = request.input('info_producer');

        // save catalog
        const saved = await producer.save();

        // notify when update success
        session.flash({ update_notification: 'Cập nhập thành công'});

        return response.redirect('/admin/catalog/view-catalog');
    }

    // delete a catalog
    async deleteProducer({ response, session, params }) {
        // get catalog by id
        const producer = await Producer.find(params.id);

        // delete catalog
        await producer.delete();

        // notify when delete success
        session.flash({ delete_notification: 'Xóa thành công'});

        return response.redirect('/admin/catalog/view-catalog');
    }
}

module.exports = ProducerController
