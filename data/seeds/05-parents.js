
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('parents').del()
    .then(function () {
      // Inserts seed entries
      return knex('parents').insert([{
        "id": 1,
        "name": "Valerie Carnalan",
        "phone": 8369678245,
        "address": "46744 Morningstar Lane",
        "spouse_name": "Cyril Stothart",
        "spouse_phone": 4625293920
      }, {
        "id": 2,
        "name": "Rosalia Kohrsen",
        "phone": "7335682090",
        "address": "112 Stuart Circle",
        "spouse_name": "Bail Seemmonds",
        "spouse_phone": 3047877224
      }, {
        "id": 3,
        "name": "Jobina Giblin",
        "phone": 2606033785,
        "address": "46349 Mcbride Street",
        "spouse_name": "Kevin Belden",
        "spouse_phone": 1107851644
      }, {
        "id": 4,
        "name": "Hephzibah Measor",
        "phone": 2354989529,
        "address": "78828 Badeau Plaza",
        "spouse_name": "Bunny Chazier",
        "spouse_phone": 1438248301
      }, {
        "id": 5,
        "name": "Llewellyn Piesing",
        "phone": 1151348065,
        "address": "8187 Karstens Court",
        "spouse_name": "Elisha McMillian",
        "spouse_phone": 5054575855
      }, {
        "id": 6,
        "name": "Joanie L'Hommeau",
        "phone": 9152531549,
        "address": "25379 Linden Circle",
        "spouse_name": "Cleveland Spurden",
        "spouse_phone": 7868425950
      }, {
        "id": 7,
        "name": "Mikkel Jerrom",
        "phone": 6653066726,
        "address": "6299 Caliangt Court",
        "spouse_name": "Con Wrought",
        "spouse_phone": 2904554078
      }, {
        "id": 8,
        "name": "Ham Ughi",
        "phone": 5843627320,
        "address": "56 Bartillon Crossing",
        "spouse_name": "Kimmi Marusik",
        "spouse_phone": 9934331657
      }, {
        "id": 9,
        "name": "Kinsley Tollet",
        "phone": 7834162272,
        "address": "707 Northwestern Parkway",
        "spouse_name": "Cordie Jenking",
        "spouse_phone": 3441254326
      }, {
        "id": 10,
        "name": "Roseanna Ashburner",
        "phone": 4899658360,
        "address": "70 Tennyson Place",
        "spouse_name": "Giraldo Lembrick",
        "spouse_phone": 9658173137
      }, {
        "id": 11,
        "name": "Leah Horsley",
        "phone": 7182169492,
        "address": "0752 Moose Circle",
        "spouse_name": "Raynell Threadgall",
        "spouse_phone": 3488552798
      }, {
        "id": 12,
        "name": "Neda Follows",
        "phone": 3217719891,
        "address": "8 Lerdahl Parkway",
        "spouse_name": "Corby Brideoke",
        "spouse_phone": 4589398915
      }, {
        "id": 13,
        "name": "Casey Lalevee",
        "phone": 7013914556,
        "address": "43795 Eastwood Hill",
        "spouse_name": "Ky Sutheran",
        "spouse_phone": 3165524287
      }, {
        "id": 14,
        "name": "Amery Woodroff",
        "phone": 5076867529,
        "address": "0003 Ryan Point",
        "spouse_name": "Bank Creagh",
        "spouse_phone": 5038103439
      }, {
        "id": 15,
        "name": "Faustine Caras",
        "phone": 1451929432,
        "address": "1 Mayfield Pass",
        "spouse_name": "Ash Facher",
        "spouse_phone": 7539922241
      }, {
        "id": 16,
        "name": "Hetty Cottesford",
        "phone": 7803233451,
        "address": "7270 Gina Plaza",
        "spouse_name": "Farris Petrushanko",
        "spouse_phone": 7295053660
      }, {
        "id": 17,
        "name": "Lorita Giannasi",
        "phone": 7362218949,
        "address": "968 Washington Park",
        "spouse_name": "Benny Thirtle",
        "spouse_phone": 3635921101
      }, {
        "id": 18,
        "name": "Pammy Drew",
        "phone": 1581916236,
        "address": "00 Schiller Point",
        "spouse_name": "Kirsten Physic",
        "spouse_phone": 8965611991
      }, {
        "id": 19,
        "name": "Jdavie Ismirnioglou",
        "phone": 5884261141,
        "address": "5599 Merry Drive",
        "spouse_name": "Madeline Senten",
        "spouse_phone": 8737621676
      }, {
        "id": 20,
        "name": "Chance Alesin",
        "phone": 9253836250,
        "address": "978 Graceland Alley",
        "spouse_name": "Brandise Doy",
        "spouse_phone": 8072856223
      }]);
    });
};

