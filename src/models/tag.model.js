const db = require('../configs/db');

class Tag {
    constructor(tag){
        this.tagId = tag.tagId;
        this.tagName = tag.tagName;
    }
    static getAll(result) {
        db.query('select * from tag', (err, rows) => {
            if (err) throw err;
            result(rows);
        });
    }
    static getById(id, result) {
        db.query('select * from tag where tagId = ?', id, (err, rows) => {
            if (err) throw err;
            console.log('Data found');
            result(rows);
        });
    }
    static addTag(tagData,result){
        db.query('insert into tag(tagName) value(?)',[tagData.tagName], (err, rows)=>{
            if(err) throw err;
            else{
                console.log('Data has been update');
                result(null, rows);
            }   
        } )
    }
    static updateTag(id,tagData,result){
        db.query('update tag set tagName = ? where tagId = ?',[tagData.tagName, id], (err, rows)=>{
            if(err) throw err;
            else{
                console.log('Data has been replace');
                result(null, rows);
            }   
        } )
    }
}

module.exports = Tag;