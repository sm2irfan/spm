const router = require('express').Router();
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');
let path = require('path');
let User = require('../model/promotion.model');


// Create new storage instance with Firebase project credentials
const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT_ID,
    keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS,
  });

  // Create a bucket associated to Firebase storage bucket
const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET_URL);

// Initiating a memory storage engine to store files as Buffer objects
const uploader = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // limiting files size to 5 MB
  },
});

  


router.route('/fileupload').post(uploader.single('photo'), async (req, res, next) => {
    console.log("working")
    try {
        if (!req.file) {
          res.status(400).send('Error, could not upload file');
          return;
        }
    
        // Create new blob in the bucket referencing the file
        const blob = bucket.file(req.file.originalname);
    
        // Create writable stream and specifying file mimetype
        const blobWriter = blob.createWriteStream({
          metadata: {
            contentType: req.file.mimetype,
          },
        });
    
        blobWriter.on('error', (err) => next(err));
    
        blobWriter.on('finish', () => {
          // Assembling public URL for accessing the file via HTTP
          const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
            bucket.name
          }/o/${encodeURI(blob.name)}?alt=media`;
    
          // Return the file name and its public URL
          res
            .status(200)
            .send({ fileName: req.file.originalname, fileLocation: publicUrl });
    
            console.log(publicUrl);

            const name = req.body.name;
            const detail = req.body.detail;
            const discount = req.body.discount;
            const from = req.body.from;
            const to = req.body.to;
            const decision = req.body.decision;
            const photo = publicUrl;

    const newUserData = {
        name,
        detail,
        discount,
        from,
        to,
        decision,
        photo
    }

    const newUser = new User(newUserData);

     newUser.save()
           .then(() => res.json('User Added'))
           .catch(err => res.status(400).json('Error: ' + err));

        });
    
        // When there is no more data to be consumed from the stream
        blobWriter.end(req.file.buffer);
      } catch (error) {
        res.status(400).send(`Error, could not upload file: ${error}`);
        return;
      }

  
   
});








//get posts method
router.get('/papers', (req,res)=>{
    User.find().exec((err,papers)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }


        return res.status(200).json({
            success:true,
            existingPapers:papers
        });
    });
});









module.exports = router;
