var ROOTDM = [
    ".www.gov.cn",
    ".big5.gov.cn",
    ".english.gov.cn",
    ".forum.gov.cn",
    ".sousuo.gov.cn",
  ],
  RECENDM = [],
  INCLUDESUBHOST = ["www.gov.cn"],
  SHOWERRHOST = 1,
  _wdUID = "1",
  _wecl = "//stat.www.gov.cn/1.gif",
  _wdVersion = { WD: 1609391805 },
  _wevcl = "//stat.www.gov.cn/2.gif";
eval(
  (function (p, a, c, k, e, d) {
    e = function (c) {
      return (
        (c < a ? "" : e(parseInt(c / a))) +
        ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if (!"".replace(/^/, String)) {
      while (c--) {
        d[e(c)] = k[c] || e(c);
      }
      k = [
        function (e) {
          return d[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--) {
      if (k[c]) {
        p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
      }
    }
    return p;
  })(
    'v 1t(){}v 2q(){}v Q(a){F a=V 2Q(a),M(a)}v 2l(a){L(C c,b="",d=7;d>=0;d--)c=15&a>>>4*d,b+=c.2d(16);F b}v 2O(a){C b,c,d,e;D(!a||""==a)F 1;L(b=4h,c=4i,d=0;d<a.I;d++)e=2o(a.4j(d)),b=(b<<6|c>>>26)+(b<<16|c>>>16)-b,c=4k&e+(c<<6)-c+(c<<16);F 2l(4g&b)+2l(c)}v 2k(){F 2O(A.P+A.11+A.3o+18.1H())}v 2b(a){C b=17,c=A.11,d=c.G(a);F-1!=d&&(d+=a.I+1,a=c.G(";",d),-1==a&&(a=c.I),b=c.2c(d,a)),b}v 2Z(){C c,d,a="",b=R;D(b.1I&&b.1I.I){L(c=0;c<b.1I.I;c++)D(-1!=b.1I[c].1T.G("3d 39")){a=b.1I[c].4f.4b("3d 39 ")[1];2f}}21 D(J.3a)L(c=10;c>=2;c--)1f{D(d=4a("V 3a(\'3j.3j."+c+"\');")){a=c+".0";2f}}1g(e){}F a}v 2D(a){a=1P+a;C b=V 3t(1,1);b.3p=a,b.4c=2q}v 37(a){R.2X?(a=1P+a,R.2X(a)):2D(a)}v 4d(a){D(1A({}),a&&""!=a){C b=K;0!=a.4e().G("2z")&&(a=1W+"//"+S+a),K=a,N=b}23()}v 4l(a){1A({}),a&&""!=a&&(K=1W+"//"+S+a),23()}v 2H(a){D(a.1e){18=V 1L,1A(a),2t(a);C b="4m=4t&3f=4u";""!=9.20&&(b+="&3m="+M(9.20)),""!=9.1J&&(b+="&3e="+M(9.1J)),K+=-1==K.G("?")?"?"+b:"&"+b,2W()}}v 34(a){C c,b=A.1h("1D");L(c 3v b)D(b[c].1T==a)F b[c].3i}v 2t(){1f{9.2K&&9.2K.2x&&(K+=-1==K.G("?")?"?":"&",K+="2x="+9.2K.2x);C b=34("1w");b&&""!=b&&(b=Q(b),K+=-1==K.G("?")?"?":"&",K+="4v="+b)}1g(c){}}v 2p(a){D(!9.1B||"4w"!=9.1B){1A({}),2t({}),a&&""!=a&&(K=-1==K.G("?")?K+"?"+a:K+"&"+a);C b=9.1e;b&&""!=b&&(K+=-1==K.G("?")?"?"+b:"&"+b),23()}}v 1A(a){D(1F=""==A.19?P.U:A.19,a.19&&(1F=a.19),a.1e?(K=a.1e,N=a.2L):K=J.P.U,S=A.P.3C,"4s:"!=A.P.3n){D(A.32?1M=Q(A.32):A.31&&(1M=Q(A.31)),1s&&17!=1s&&0!=1s.I){L(i=0;i<1s.I;i++)D(1s[i]&&S&&-1!=1s[i].G(S)){1d="0";2f}}21 1d="0";D("1"!=1d||17==33||1==33){D("1"==1d&&1t(""),Z&&17!=Z&&0!=Z.I&&S&&""!=S)L(i=0;i<Z.I;i++)-1!=S.G(Z[i])&&(1v=Z[i]);1t("N="+N),N&&""!=N?(r=N.G(A.2G),r>=0&&8>=r||0==N.G("[")&&N.3g("]")==N.I-1&&(N="")):N="",1t("N="+N),1t("12="+12),1t("1y="+1y),1i&&(1O=2o(12.4o(12.G("3J")+5))),1i&&1O>=5&&(A.13.36("#35#4p"),1U=A.13.4q,A.13.36("#35#3S"),2g=A.13.3T(P.U)?"1":"0");1f{1i&&(1Y=A.3U)}1g(b){1Y=0}29=2Z(),27=(V 1L).3W()/-3Q,"3A"!=1u 14&&17!=14&&(2Y=14.2s,2T=14.3M,2M=14.3P,38=2Y+"x"+2T,22&&1z>=4&&(2M=14.3V)),(22&&1z>=4||1N)&&(1G=R.48),1i&&1z>=4&&!1N&&(1G=R.3X),24=1==R.45()?"1":"0",R.2S&&(1c=1==R.2S?"1":"0"),1==1c&&2R()}}}v 2R(){C a=A.11,b=a.G("28=");D(0>b){D(1x="0",1m=2k(),b="",1v&&""!=1v&&(b="2G=4y.47.43;"),A.11="28="+M(1m)+";"+1K+b+"2I=/;",A.11.G("28=")<0)F 1c=0,42 0}21 1x="1",1m=2b("28");b=A.11.G("2n="),0>b?1j=0:(1j=2o(2b("2n")),1o=2U.2V(18.1H()/2N-1j),2u>=1o&&(1k="0")),A.11="2n="+2U.2V(18.1H()/2N)+";"+1K+"2I=/;",b=A.11.G("2w="),0>b||"1"==1k?(1k="1",1l=2k(),1o=10,A.11="2w="+1l+";"+"2I=/;"):1l=2b("2w")}v 23(){2a="0"==1c?1C()+1E():1C()+2C()+1E(),2D(2a)}v 2W(){2a="0"==1c?1C()+1E():1C()+2C()+1E(),37(2a)}v 1C(){F"?z="+3u+"&a="+18.1H().2d(16)+"&b="+Q(1F)+"&B="+1M+"&c="+Q(K)+"&d="+Q(N)+"&e="+1o+"&f="+1l+"&H="+Q(S)+"&E="+1d}v 1E(){F"&i="+Q(1G)+"&j="+24+"&k="+38+"&l="+2M+"&m="+29+"&n="+Q(1U)+"&o="+27}v 2C(){F"&r="+1m+"&s="+1x+"&t="+1j+"&u="+1k}C 9,1K,1c,24,2g,29,27,1G,1U,1Y,1d,1F,1M,K,S,1v,N,12,1y,14,1z,22,3L,1i,1N,1O,1m,1x,1j,1k,1l,1o,18,2u;2Q.3B.3h=v(){C a=/^\\s+|\\s+$/g;F v(){F 1b.2j(a,"")}}(),9=9||{},9.1D=A.1h("1D"),9.O=v(a){C c,b=9.1D;D(b)L(c=0;c<b.I;c++)D(b[c].1T==a)F b[c].3i.3h();F""},9.20=9.O("4F"),9.1Q=9.O("4V"),9.1Z=9.O("1Z"),9.1a=9.O("1a"),9.1p=9.O("1p"),9.1n=9.O("1n"),9.1w=9.O("1w"),9.2h=9.O("4G"),9.1R=9.O("1R"),9.2r=9.O("4H"),9.1S=9.O("1S"),9.1B=9.O("1B"),9.1J=9.O("1J"),9.3k=9.4E||v(){},9.3k(),9.1e=v(){C b,a="";F a="3m="+M(9.20)+"&",9.1Q?(9.1n=1,9.1p||(9.1p=1)):9.1n=2,9.1a&&(a+=9.1a.G(";1")>=0?"3l="+M(9.1a)+"&":"3l="+M(9.1a.2c(0,9.1a.3g("/"))+";1")+"&"),a+="3f="+M(9.1Z?9.1Z:0)+M(9.1p?9.1p:0)+M(9.1n?9.1n:0)+"&",9.1w&&(a+="4O="+M(9.1w)+"&"),9.1Q&&(a+="4P="+M(9.1Q)+"&"),9.2h&&(a+="4S="+M(9.2h)+"&"),9.1R&&(a+="4J="+M(9.1R)+"&"),9.3b&&(a+="53="+M(9.3b)+"&"),9.3c&&(a+="50="+M(9.3c)+"&"),9.1S&&(b=9.1S.2j(/,/g,";"),a+="3e="+M(b)+"&"),9.2r&&(a+="51="+M(9.2r)+"&"),a}(),1W=P.3n.G("2P")>-1?"2P:":"2z:",1P=1W+4L,1K="4T=4B, 1 4z 4D 2J:2J:2J 4U;",1c="0",24="0",2g="0",29=0,27=0,1G="",1U="",1Y=0,1d="1",1F=""==A.19?P.U:A.19,K=J.P.U,S=J.P.3C,1v="",N=A.3o,12=R.4n+" "+R.3K,1y=R.49,14=J.25,1z=R.3K.2c(0,1),22=-1!=12.G("3Z")?!0:!1,3L=-1!=12.G("4I")?!0:!1,1i=-1!=12.G("3J")?!0:!1,1N=-1!=1y.G("4M")?!0:!1,1O=0,1x="0",1j=0,1k="1",1l="",1o=10,18=V 1L,J.4N=2q,2u=4R,v(){v a(a){4W(a[0]){4X"2p":2p(a[1])}}v h(a){C c,b=A.1h("1D");L(c=0;c<b.I;c++)D(b[c].1T==a&&0!=b[c].3H&&"46"!=b[c].3H)F!0}v i(a){C d,b={z:3u,a:18.1H().2d(16),c:Q(J.P.U),d:Q(a),k:g,H:Q(S),r:1m},c="";L(d 3v b)c+="&"+d+"="+b[d];d=1P.2j("1.3w","3.3w")+"?"+c.3F(1),3s=V 3t(1,1),3s.3p=d}v j(a){C c,d,b=J.4Q;"1X"!=1u b&&(b="2F"==A.2E?A.2y.3q:A.13.3q),c=J.4C,"1X"!=1u c&&(c="2F"==A.2E?A.2y.3r:A.13.3r),d=J.4A,"1X"!=1u d&&(d="2F"==A.2E?A.2y.3x:A.13.3x),1b.x=c+a.3y,1b.y=d+a.3E,1b.w=b}v k(a,b){C c=V j(a);b&&(c.x=a.3y+b.x,c.y=a.3E+b.y),d.I>10?m():d.2e(c)}v l(a){C c,d,b="";L(c=0;c<a.I;c++)d=a[c],b+=d.x+"*"+d.y+"*"+d.w+",";F b.3F(0,b.I-1)}v m(){D(d.I>0){C a=l(d.56(0,d.I));i(a)}}v n(){C a,b,c;D(h("54")){D(a=r("1B"),b=v(a){F v(b){k(b,a)}},J.1r)L(A.1r("2B",v(a){k(a)},!0),J.1r("52",v(){m()},!0),c=0;c<a.I;c++)1f{a[c].2m.A.1r("2B",b(a[c].T),!0)}1g(d){}21 D(J.1q)L(A.1q("2A",v(a){k(a)}),J.1q("4Y",v(){m()}),c=0;c<a.I;c++)1f{a[c].2m.A.1q("2A",b(a[c].T))}1g(d){}4Z(m,2N*f)}}v o(a){D(a==A.2G)F!0;D(Z&&0!=Z.I&&a)L(c=0;c<Z.I;c++){C b=Z[c];D(-1!=a.G(b))F!0;D(b&&b.I>0&&"."==b[0]&&a==b.2c(1))F!0}F!1}v p(a,b){D(a&&a.3G&&0==a.U.G("2z")&&(b||!o(a.3G))){C c=a.2i("2v");c||(a.1r?(a.1r("2B",v(a){C b=a.55,c={1e:b.U,2L:A.P.U,19:b.4K};2H(c)}),a.3D("2v",!0)):a.1q&&(a.1q("2A",v(){C a=J.4x.41,b={1e:a.U,2L:A.P.U,19:a.40};2H(b)}),a.3D("2v",!0)))}}v q(){C c,d,e,f,a=h("3I"),b=A.1h("a");L(c=0;c<b.I;c++)d=b[c],e=d.2i("3I"),f=d.2i("3Y"),(17!=e||a)&&p(d,!1),17!=f&&p(d,!0)}v r(a,b,c){C e,f,h,i,d=b;d||(d=[]),e=0;1f{f=c?c.2m.A.1h(a):A.1h(a),e=f.I}1g(g){e=0}L(h=0;e>h;h++)i=s(f[h]),c&&c.T&&(i.x+=c.T.x,i.y+=c.T.y),f[h].T=i,d.2e(f[h]),r(a,d,f[h]);F d}v s(a){T=V 3N,T.x=0,T.y=0;L(C b=a;17!=b&&b!=A.13;)T.x+=b.3O,T.y+=b.3R,b=b.44;F T}C b,c,d,f,g;D(!J["3z"]){D(J["3z"]=V 1L,"3A"!=1u 1V){L(J[1V].q=J[1V].q||[],b=J[1V].q,c=0;c<b.I;c++)a(b[c]);b.2e=v(b){a(b)}}d=V 4r,f=30,g=0,J.25&&"1X"==1u J.25.2s&&(g=J.25.2s),j.3B.2d=v(){F"X: "+1b.x+", Y:"+1b.y+", W:"+1b.w},n(),q()}}();',
    62,
    317,
    "|||||||||_webdigObj||||||||||||||||||||||function|||||document||var|if||return|indexOf||length|window|_wdSL|for|escape|_wdRP|getMeta|location|fesc|navigator|_wdHost|position|href|new||||ROOTDM||cookie|_wdUA|body|_wdWS|||null|curtime|title|subject|this|_wdCK|_wdErr|url|try|catch|getElementsByTagName|_wdIE|_wdLS|_wdTO|_wdSID|_wdCID|pagetype|_wdDU|publishedtype|attachEvent|addEventListener|INCLUDESUBHOST|println|typeof|_wdRDM|author|_wdBCID|_wdRUA|_wdBV|setup_data|iframe|getGeneralInfo|meta|getLocalInfo|_wdDT|_wdLG|getTime|plugins|elqd|_wdED|Date|_wdCS|_wdOP|_wdIEV|_wdCA|contentid|source|service|name|_wdCT|_wd_o|_wdLP|number|_wdFS|filetype|catalogs|else|_wdNN|write_ref|_wdJE|screen||_wdTZ|wdcid|_wdFl|_dgURL|getCookie|substring|toString|push|break|_wdHP|publishdate|getAttribute|replace|wdGenCID|wdhex|contentWindow|wdlast|parseInt|wd_paramtracker|_wdEC|speical|width|setup_metadata|_wdTimeOut|eltkstat|wdses|tid|documentElement|http|onclick|click|getCookieInfo|send_ref|compatMode|CSS1Compat|domain|_wd_track_external|path|00|discuz|referer|_wdCD|1e3|wdHash|https|String|setup_cookie|cookieEnabled|_wdSH|Math|round|write_bc|sendBeacon|_wdSW|wdFlash||charset|characterSet|SHOWERRHOST|getmetaContents|default|addBehavior|send_bc|_wdSR|Flash|ActiveXObject|editor|reporter|Shockwave|_wdqd|_wdt|lastIndexOf|trim|content|ShockwaveFlash|sec|_wds|_wdc|protocol|referrer|src|clientWidth|scrollLeft|refImg|Image|_wdUID|in|gif|scrollTop|clientX|_wd_common_loaded|undefined|prototype|host|setAttribute|clientY|slice|hostname|value|eltk|MSIE|appVersion|_wdMC|height|Object|offsetLeft|colorDepth|60|offsetTop|homePage|isHomePage|fileSize|pixelDepth|getTimezoneOffset|userLanguage|eltkf|Netscape|innerText|srcElement|void|cn|offsetParent|javaEnabled|disabled|gov|language|userAgent|eval|split|onload|wd_tracker|toLowerCase|description|2147483647|1732584193|4023233417|charCodeAt|4294967295|wd_reptracker|_wdxid|appName|substr|clientCaps|connectionType|Array|file|000000000000000000000000000000000000000000|111|_wdmd|unstats|event|www|Jan|pageYOffset|Fri|pageXOffset|2038|pro|catalog|firstpublishedtime|webterren_speical|Mac|_wdori|textContent|_wecl|Opera|onerror|_wda|_wdci|innerWidth|1800|_wdp|expires|GMT|manuscriptId|switch|case|onbeforeunload|setInterval|_wdr|_wdsp|unload|_wda2|uctk|currentTarget|splice".split(
      "|"
    ),
    0,
    {}
  )
);
