import axios from "axios";
import config from '../config/config'

class BackendService {

    constructor() {
        this.url = config.apiBackendUrl;
    }

    getLogData = () => {
        const a = Promise.resolve({
            "uniqueVisitors": ["crl12.crl.com", "world.std.com", "3.bank2.dialup.ctenet.com", "sl4.ndts1.dsu.NoDak.edu", "er6.rutgers.edu", "cssu24.cs.ust.hk", "debasement.clark.net", "ppp19.glas.apc.org", "shep102.wustl.edu", "access9.accsyst.com", "204.50.56.205", "freenet3.scri.fsu.edu", "alweiner.clark.net", "dialup040.cc.columbia.edu", "130.34.146.126", "pfgc.mindspring.com", "scooter.pa-x.dec.com", "205.168.106.58", "kuts4p01.cc.ukans.edu", "SSA10.HALLS.ColoState.EDU", "s254n034ppp15.csun.edu", "prpayne-ppp.clark.net", "pwpark.remote.Princeton.EDU", "204.249.225.59", "ikd7.info.gifu-u.ac.jp", "dialup522.Bloomington.mci.net", "Loki.async.smsu.edu", "asn6.whidbey.net", "lin-ppp.clark.net", "www-d2.proxy.aol.com", "165.113.1.43", "ari.ari.net", "piweba4y.prodigy.com", "metronet.lib.mi.us", "504.249.225.59", "ppp-a2.ulaval.ca", "SLIP4A-03.DIALIN.UIC.EDU", "world.gf.com", "127.0.0.1"],
            "numberRequests": 908,
            "numberValidRequests": 656,
            "lastRequest": {
                "date": "1995-08-28T04:00:38.000Z",
                "url": "world.gf.com",
                "method": "world.gf.com",
                "status": "GET",
                "section": "apidddd",
                "isSuccess": true
            },
            "sections": [{"occurrence": 672, "successNumber": 564, "sectionName": "pub"}, {
                "occurrence": 133,
                "successNumber": 51,
                "sectionName": "atomicbk"
            }, {"occurrence": 27, "successNumber": 9, "sectionName": "azizs"}, {
                "occurrence": 20,
                "successNumber": 5,
                "sectionName": "api"
            }, {"occurrence": 12, "successNumber": 0, "sectionName": "aziz"}, {
                "occurrence": 12,
                "successNumber": 3,
                "sectionName": "apidddd"
            }, {"occurrence": 6, "successNumber": 6, "sectionName": "html"}, {
                "occurrence": 3,
                "successNumber": 0,
                "sectionName": "pubg"
            }, {"occurrence": 3, "successNumber": 0, "sectionName": "api4"}, {
                "occurrence": 3,
                "successNumber": 3,
                "sectionName": "larouche"
            }, {"occurrence": 2, "successNumber": 0, "sectionName": "report"}]
        });
        return doRequest(this.url)
    };


}

const doRequest = (url) => {
    return axios.get(url).then(res => {
        return res.data
    })
};

const backendService = new BackendService();
export default backendService;
