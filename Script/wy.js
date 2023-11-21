[mitm]
hostname = kj9.7ve0z.com,56h.2bd6o.com,53g.g0ki2.com

[rewrite_local]
^https:\/\/(kj9.7ve0z.com|56h.2bd6o.com|53g.g0ki2.com)\/api\/app\/(ping\/domain\/h5|vid\/(info\/?|user\/count|tiroCountdown)|mine\/info) url script-response-body https://raw.githubusercontent.com/JACKMR66/MR/main/Script/wuyou.js
