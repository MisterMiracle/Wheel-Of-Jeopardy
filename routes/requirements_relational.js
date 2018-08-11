var express = require('express');
var router = express.Router();
const db = require('../server.js');

var getRequirements = 'SELECT * FROM requirement natural join guidance natural join id_am natural join id_be natural join id_gv natural join id_ra natural join id_rm natural join id_sc natural join pr_ac natural join pr_at natural join pr_ds natural join pr_ip natural join pr_ma natural join pr_pt natural join de_ae natural join de_cm natural join de_dp natural join rs_rp natural join rs_co natural join rs_an natural join rs_mi natural join rs_im natural join rc_rp natural join rc_im natural join rc_co'
var createRequirement = 'INSERT INTO requirement(requirement_description,guidance_id) VALUES($1,$2)'
var updateRequirement='UPDATE requirement SET requirement_description=$1 WHERE requirement_id=$2'
var deleteRequirement = 'DELETE FROM requirement WHERE requirement_id=$1'


router.get('/getRequirements', function(req, res, next) {
    //do console log if necessary
    db.query(getRequirements, function(err, result) {
        if (err)
            { console.error(err); res.send("Error " + err); }
        else{
        console.log(result.rows)
        res.json(result.rows);
        }
    });
});

var create_id_am='INSERT INTO id_am(id_am1,id_am2,id_am3,id_am4,id_am5,id_am6,guidance_id) VALUES($1,$2,$3,$4,$5,$6,$7)'
var create_id_be='INSERT INTO id_be(id_be1,id_be2,id_be3,id_be4,id_be5,guidance_id) VALUES($1,$2,$3,$4,$5,$6)'
var create_id_gv='INSERT INTO id_gv(id_gv1,id_gv2,id_gv3,id_gv4,guidance_id) VALUES($1,$2,$3,$4,$5)'
var create_id_ra='INSERT INTO id_ra(id_ra1,id_ra2,id_ra3,id_ra4,id_ra5,guidance_id) VALUES($1,$2,$3,$4,$5,$6) '
var create_id_rm='INSERT INTO id_rm(id_rm1,id_rm2,id_rm3,guidance_id) VALUES($1,$2,$3,$4) '
var create_id_sc='INSERT INTO id_sc(id_sc1,id_sc2,id_sc3,id_sc4,id_sc5,guidance_id) VALUES($1,$2,$3,$4,$5,$6)'
var create_pr_ac='INSERT INTO pr_ac(pr_ac1,pr_ac2,pr_ac3,pr_ac4,pr_ac5,pr_ac6,guidance_id) VALUES($1,$2,$3,$4,$5,$6,$7) '
var create_pr_at='INSERT INTO pr_at(pr_at1,pr_at2,pr_at3,pr_at4,pr_at5,guidance_id) VALUES($1,$2,$3,$4,$5,$6)'
var create_pr_ds='INSERT INTO pr_ds(pr_ds1,pr_ds2,pr_ds3,pr_ds4,pr_ds5,pr_ds6,pr_ds7,pr_ds8,guidance_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)'
var create_pr_ip='INSERT INTO pr_ip(pr_ip1,pr_ip2,pr_ip3,pr_ip4,pr_ip5,pr_ip6,pr_ip7,pr_ip8,pr_ip9,pr_ip10,pr_ip11,pr_ip12,guidance_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)'
var create_pr_ma='INSERT INTO pr_ma(pr_ma1,pr_ma2,guidance_id) VALUES($1,$2,$3)'
var create_pr_pt='INSERT INTO pr_pt(pr_pt1,pr_pt2,pr_pt3,pr_pt4,pr_pt5,guidance_id) VALUES($1,$2,$3,$4,$5,$6)'
var create_de_ae='INSERT INTO de_ae(de_ae1,de_ae2,de_ae3,de_ae4,de_ae5,guidance_id) VALUES($1,$2,$3,$4,$5,$6)'
var create_de_cm='INSERT INTO de_cm(de_cm1,de_cm2,de_cm3,de_cm4,de_cm5,de_cm6,de_cm7,de_cm8,guidance_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)'
var create_de_dp='INSERT INTO de_dp(de_dp1,de_dp2,de_dp3,de_dp4,de_dp5,guidance_id) VALUES($1,$2,$3,$4,$5,$6)'
var create_rs_rp='INSERT INTO rs_rp(rs_rp1,guidance_id) VALUES($1,$2)'
var create_rs_co='INSERT INTO rs_co(rs_co1,rs_co2,rs_co3,rs_co4,rs_co5,guidance_id) VALUES($1,$2,$3,$4,$5,$6)'
var create_rs_an='INSERT INTO rs_an(rs_an1,rs_an2,rs_an3,rs_an4,guidance_id) VALUES($1,$2,$3,$4,$5)'
var create_rs_mi='INSERT INTO rs_mi(rs_mi1,rs_mi2,rs_mi3,rs_mi4,guidance_id) VALUES($1,$2,$3,$4,$5)'
var create_rs_im='INSERT INTO rs_im(rs_im1,rs_im2,guidance_id) VALUES($1,$2,$3)'
var create_rc_rp='INSERT INTO rc_rp(rc_rp1,guidance_id) VALUES($1,$2)'
var create_rc_im='INSERT INTO rc_im(rc_im1,rc_im2,guidance_id) VALUES($1,$2,$3)'
var create_rc_co='INSERT INTO rc_co(rc_co1,rc_co2,rc_co3,guidance_id) VALUES($1,$2,$3,$4)'
var create_guidance='INSERT INTO guidance DEFAULT VALUES RETURNING guidance_id'
//TODO communication protocol and system 

router.post('/createRequirement', function(req, res, next) {
        var description = "IDS";
    var id_am=req.body.requirement.id_am
    var id_be=req.body.requirement.id_be
    var id_gv=req.body.requirement.id_gv
    var id_ra=req.body.requirement.id_ra
    var id_rm=req.body.requirement.id_rm
    var id_sc=req.body.requirement.id_sc
    var pr_ac=req.body.requirement.pr_ac
    var pr_at=req.body.requirement.pr_at
    var pr_ds=req.body.requirement.pr_ds
    var pr_ip=req.body.requirement.pr_ip
    var pr_ma=req.body.requirement.pr_ma
    var pr_pt=req.body.requirement.pr_pt
    var de_ae=req.body.requirement.de_ae
    var de_cm=req.body.requirement.de_cm
    var de_dp=req.body.requirement.de_dp
    var rs_rp=req.body.requirement.rs_rp
    var rs_co=req.body.requirement.rs_co
    var rs_an=req.body.requirement.rs_an
    var rs_mi=req.body.requirement.rs_mi
    var rs_im=req.body.requirement.rs_im
    var rc_rp=req.body.requirement.rc_rp
    var rc_im=req.body.requirement.rc_im
    var rc_co=req.body.requirement.rc_co
    
    var guidance_id

    db.query(create_guidance,function(err, result) {
        
        if (err){ 
            console.error(err); 
            res.send("Error " + err); 
        }        
        else{
            guidance_id=result.rows[0].guidance_id
            db.query(create_id_am,[id_am.id_am1,id_am.id_am2,id_am.id_am3,id_am.id_am4,id_am.id_am5,id_am.id_am6,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }  
            });
            db.query(create_id_be,[id_be.id_be1,id_be.id_be2,id_be.id_be3,id_be.id_be4,id_be.id_be5,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }     
            });
            db.query(create_id_gv,[id_gv.id_gv1,id_gv.id_gv2,id_gv.id_gv3,id_gv.id_gv4,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }      
            });
            db.query(create_id_ra,[id_ra.id_ra1,id_ra.id_ra2,id_ra.id_ra3,id_ra.id_ra4,id_ra.id_ra5,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }      
            });
            db.query(create_id_rm,[id_rm.id_rm1,id_rm.id_rm2,id_rm.id_rm3,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }     
            });
            db.query(create_id_sc,[id_sc.id_sc1,id_sc.id_sc2,id_sc.id_sc3,id_sc.id_sc4,id_sc.id_sc5,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }     
            });
            db.query(create_pr_ac,[pr_ac.pr_ac1,pr_ac.pr_ac2,pr_ac.pr_ac3,pr_ac.pr_ac4,pr_ac.pr_ac5,pr_ac.pr_ac6,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }     
            });
            db.query(create_pr_at,[pr_at.pr_at1,pr_at.pr_at2,pr_at.pr_at3,pr_at.pr_at4,pr_at.pr_at5,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }      
            });
            db.query(create_pr_ds,[pr_ds.pr_ds1,pr_ds.pr_ds2,pr_ds.pr_ds3,pr_ds.pr_ds4,pr_ds.pr_ds5,pr_ds.pr_ds6,pr_ds.pr_ds7,pr_ds.pr_ds8,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }     
            });
            db.query(create_pr_ip,[pr_ip.pr_ip1,pr_ip.pr_ip2,pr_ip.pr_ip3,pr_ip.pr_ip4,pr_ip.pr_ip5,pr_ip.pr_ip6,pr_ip.pr_ip7,pr_ip.pr_ip8,pr_ip.pr_ip9,pr_ip.pr_ip10,pr_ip.pr_ip11,pr_ip.pr_ip12,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }      
            });
            db.query(create_pr_ma,[pr_ma.pr_ma1,pr_ma.pr_ma2,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }      
            });
            db.query(create_pr_pt,[pr_pt.pr_pt1,pr_pt.pr_pt2,pr_pt.pr_pt3,pr_pt.pr_pt4,pr_pt.pr_pt5,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }     
            });
            db.query(create_de_ae,[de_ae.de_ae1,de_ae.de_ae2,de_ae.de_ae3,de_ae.de_ae4,de_ae.de_ae5,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }      
            });
            db.query(create_de_cm,[de_cm.de_cm1,de_cm.de_cm2,de_cm.de_cm3,de_cm.de_cm4,de_cm.de_cm5,de_cm.de_cm6,de_cm.de_cm7,de_cm.de_cm8,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }     
            });  
            db.query(create_de_dp,[de_dp.de_dp1,de_dp.de_dp2,de_dp.de_dp3,de_dp.de_dp4,de_dp.de_dp5,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }      
            });   
            db.query(create_rs_rp,[rs_rp.rs_rp1,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }     
            });
            db.query(create_rs_co,[rs_co.rs_co1,rs_co.rs_co2,rs_co.rs_co3,rs_co.rs_co4,rs_co.rs_co5,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }      
            });
            db.query(create_rs_an,[rs_an.rs_an1,rs_an.rs_an2,rs_an.rs_an3,rs_an.rs_an4,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }      
            });
            db.query(create_rs_mi,[rs_mi.rs_mi1,rs_mi.rs_mi2,rs_mi.rs_mi3,rs_mi.rs_mi4,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }      
            });
            db.query(create_rs_im,[rs_im.rs_im1,rs_im.rs_im2,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }      
            });
            db.query(create_rc_rp,[rc_rp.rc_rp1,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }     
            });
            db.query(create_rc_im,[rc_im.rc_im1,rc_im.rc_im2,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }      
            });
            db.query(create_rc_co,[rc_co.rc_co1,rc_co.rc_co2,rc_co.rc_co3,guidance_id],function(err,result){
                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }     
            });
            //TODO check that requirement description is unique, then add
            db.query(createRequirement,[description,guidance_id] ,function(err, result) {

                if (err){ 
                    console.error(err); 
                    res.send("Error " + err); 
                }       
            });         
        }        
    });
    
    
    
    
});

router.put('/updateRequirement', function (req, res, next) {
    var description = req.body.description;
    var requirement_id = req.body.requirement_id;
    db.query(updateRequirement,[description ,requirement_id] ,function(err, result) {
        if (err){ 
            console.error(err); res.send("Error" + err); 
        }
        else {
            res.json(result);
        }
    });
});


router.delete('/deleteRequirement', function (req, res, next) {
    var requirement_id = req.query.requirement_id;
    db.query(deleteRequirement,[requirement_id] ,function(err, result) {
        if (err){ 
            console.error(err); res.send("Error " + err); 
        }
        else {
            res.send(result);
        }
    });
});

module.exports = router;