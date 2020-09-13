const express = require('express')
const router = express.Router()
const Question = require('../models/questionModel')

//route for creating/posting a  questions
router.post('/questions', async (req,res) =>{
    try{
        const {description} = req.body
        //const {QN} = req.body

        const question = await Question.create({
            description,
            //QN
        })
        return res.status(201).json(question)
    }catch (error){
        return res.status(500).json({"error":error})
    }
})
//route for searching all questions
router.get('/questions', async (req,res) =>{
    try{
        const questions = await Question.find()
        return res.status(200).json(questions)
    } catch (error) {
        return res.status(500).json({"error":error})
    }

})
//route for deleting question
router.delete('/questions/:id', async (req,res)=>{
    try{
        const _id=req.params.id
        const question = await Question.deleteOne({_id})

        if(question.deletedCount ===0){
            return res.status(404).json()
        }else{
            return res.status(204).json()
        }
    } catch (error){
        return res.status(500).json({"error":error})
    }
})
//route for searching one question
router.get('/questions/:id', async (req,res)=>{
    try{
        const _id = req.params.id
        const question= await Question.findOne({_id})
        if(!question){
            return res.status(404).json({})
        }else{
            return res.status(200).json(question)
        }
    } catch(error){
        return res.status(500).json({"error":error})
    }

})

//test
//router.get('/', (req,res)=>{
    ///res.send('Hello Beautiful People')

//})
module.exports = router;
