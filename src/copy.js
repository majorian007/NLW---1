
db.serialize(() => {
    
    db.run(`
    CREATE TABLE IF NOT EXISTS places (
        id INTERGER PRIMARY KEY AUTOINCREMENT
        image TEXT,
        name TEXT,
        address TEXT,
         adress2 TEXT,
         state TEXT,
         city TEXT,
         items TEXT
    );
    `)
    const query = `
    INSERT INTO places (
        image,
        name,
        adress,
        adress2,
        state,
        city,
        items
    ) VALUES (
        ?,?,?,?,?,?,?);`

    db.run([
       "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
       "Colectoria",
       "Guilherme Gemballa, Jardim América",
       "Número 260",
       "Santa Catarina",
       "Rio do Sul",
       "Resíduos Eletrônicos, Lâmpadas"
    ])

    function afterInsertData(err){
        if(err)
        return console.log(err)
    }


    db.run(query, values, function(err) {
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)


        db.run(query, values, afterInsertData)
    

        db.all(`select * FROM places`, function(err, rows){
            if(err){
                return console.log(err)
        })

        console.log("Aqui estão seus registros:")
        console.log(rows)


    })
db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
    if(err)
})



})