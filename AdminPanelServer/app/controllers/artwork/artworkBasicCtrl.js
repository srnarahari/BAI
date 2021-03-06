var restify = require('restify');
var artworkModel = require('mongoose').model('artworkModel');
const mongoose = require('mongoose');
var jwt = require('../../service/auth/jwt')
var featureChecker = require('../../service/auth/featureChecker');
var microSiteVenu = require('../MicroSiteEntityProfileLocation/microSiteEntitylocationprofileBacisCtrl');
exports.createArtwork = function (req, res, next) {
    //  console.log(req.files.article_upload.name);
    jwt.validateToken,
    featureChecker.hasAccessToFeatureNew,
    body_json = JSON.stringify(req.body);

    // console.log(body_json);
    var artworkData = req.body;
    var formattedArtworkData = formatArtworkData();
    console.log('Creating artwork Data with', artworkData, '---------------------\n');

    artworkModel.create(formattedArtworkData, function (err, insertedArtwork) {
        if (err) {
            return next(new restify.errors.InternalServerError(err));
        } else {
            res.status(200);
            console.log(insertedArtwork);
            res.send(insertedArtwork);
            // let data={
            //     ArtWorkId:insertedArtwork._id,
            //     addedDate:insertedArtwork.added_date
            // }
            // microSiteVenu.addDataToLinkedList(data,insertedArtwork.entityLocation[0]._id,"linkedArtworks");
        }
    });
    //Format Article data
    function formatArtworkData() {
        return {
            entityLocation: artworkData.location,
            title:artworkData.title,
            field_artists:artworkData.field_artists,
            artworkType: artworkData.artworkType,
            language:artworkData.language,
            img_height:artworkData.height,
            img_width:artworkData.widh,
            field_artists:artworkData.field_artists,
            img_depth:artworkData.depth,
            img_units:artworkData.units,
            date_field:artworkData.date_field,
            img_measurmentDescription:artworkData.measurmentDescription,
            img_mediumCategory:artworkData.mediumCategory,
            material:artworkData.material,
            edition:artworkData.edition,
            date_dateQualifier:artworkData.dateQualifier,
            artWorkSpecialties:artworkData.specialties,
            date_subject:artworkData.subject,
            date_status:artworkData.satus,
            date_priceFrom:artworkData.priceFrom,
            date_priceTo:artworkData.priceTo,
            currency:artworkData.currency,
            extraDescription:artworkData.extraDescription,
            seo_keywords: artworkData.seo_keywords,
            authored_by:artworkData.authored_by,
            authored_on:artworkData.authored_on,
            // published:artworkData.published,
            seo_description:artworkData.description,
            artwork_order:artworkData.artwork_order,
            createdBy:artworkData.userId
        };
    };
}

exports.deleteArtwork = (req,res,next)=>{
    jwt.validateToken;
    featureChecker.hasAccessToFeatureNew;
    var artworkId = req.params.artworkId;
    console.log(artworkId);
    /*artworkModel.remove({_id:artworkId},(err,object)=>{
        if(err){
            res.send({status:'failure',response:err});
        }else{
            res.send({status:'Success',response:object});
        }
    });*/
    next();
};
