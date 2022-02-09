const mongodb = require("mongodb").MongoClient
const url = "mongodb+srv://*****:*****@cluster0.dzt5g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongodb.connect(url,(erro,banco)=>{
    if (erro) throw erro
    const dbo=banco.db("cursosinformatica")
    const colecao="cursos"

    // Metodo para Inserir Um Dado
    // const obj = {curso:'curso de html'}
    // dbo.collection(colecao).insertOne(obj,(erro,resultado)=>{
    //     if (erro) throw erro
    //     console.log('1 curso inserido')
    //     banco.close()
    // })

    // Metodo para Inserir Diversos Dados
    // Contando Registros Inseridos
    const obj = [
        {curso:'curso de css'},
        {curso:'curso de javascript'},
        {curso:'curso de javascript'},
        {curso:'curso de javascript'},
        {curso:'curso de react'}
    ]
    dbo.collection(colecao).insertMany(obj, async (erro,resultado)=>{
        if (erro) throw erro
        await console.log(resultado.insertedCount + ' novo(s) curso(s) inserido(s)')
        // banco.close()
    })

    // Metodo para Mostrar Dados
    dbo.collection(colecao).find({},{projection:{_id:0}}).toArray((erro,resultado)=>{
        if (erro) throw erro
        console.log(resultado)
        banco.close()
    })

    // Refinando Pesquisa através da Query
    // const query = {curso: 'curso de react'}
    // dbo.collection(colecao).find(query,{projection:{_id:0}}).toArray((erro,resultado)=>{
    //     if (erro) throw erro
    //     console.log(resultado)
    //     banco.close()
    // })

    // Ordenando Pesquisa com Método Sort
    // const ordenacao = {curso:1}
    // const query = {}
    // dbo.collection(colecao).find(query).sort(ordenacao).toArray((erro,resultado)=>{
    //     if (erro) throw erro
    //     console.log(resultado)
    //     banco.close()
    // })

    // Remoção de Um Objeto da Coleção
    // let query = {curso: /.t/}
    // dbo.collection(colecao).deleteOne(query,(erro,resultado)=>{
    //     if (erro) throw erro
    //     console.log('1 curso deletado')
    //     banco.close()
    // })

    // Remocao de Varios Objetos 
    // let query = {curso: /.t/}
    // dbo.collection(colecao).deleteMany(query, async (erro,resultado)=>{
    //     if (erro) throw erro
    //     await console.log(resultado.deletedCount + ' curso(s) deletado(s)')
    //     banco.close()
    // })

    // Atualização de Objetos
    // let query = {curso: 'curso de css'}
    // let novoObj = {$set: {curso: 'curso de css 2022'}}
    // dbo.collection(colecao).updateMany(query, novoObj, async (erro,resultado)=>{
    //     if (erro) throw erro
    //     await console.log(resultado.modifiedCount + ' curso(s) atualizado(s)')
    //     banco.close()
    // })

    // Limitando o nº de Objetos Retornados
    // const query = {}
    // const limite = 4
    // dbo.collection(colecao).find(query,{projection:{_id:0}}).limit(limite).toArray((erro,resultado)=>{
    //     if (erro) throw erro
    //     console.log(resultado)
    //     banco.close()
    // })

})