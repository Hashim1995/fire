const DocumentTypes = [
    { value: 1, label: 'İşəgötürmə Təsdiqi' },
    { value: 2, label: 'Vergi İdentifikasiya Nömrəsi' },
    { value: 3, label: 'Tələbə Statusunun Təsdiqi' },
    { value: 4, label: 'Pensiyaçı Statusunun Təsdiqi' },
    { value: 5, label: 'Bank Hesabı Və Çıxarış Məlumatları' },
    { value: 6, label: 'Nikah Şəhadətnaməsi' },
    { value: 7, label: 'Boşanma Şəhadətnaməsi' },
    { value: 8, label: 'Uşaqlar Üçün Doğum Şəhadətnaməsi' },
    { value: 9, label: 'Himayəçilik Müraciəti' },
    { value: 10, label: 'Əmlak və ya Nəqliyyat Vasitəsinin Sənədləri' },
    { value: 11, label: 'Şengen Viza Stikeri' },
    { value: 12, label: 'Valideynlərdən Səyahət İcazəsi' },
    { value: 13, label: 'Pasport' }
];

const VisaCategories = [
    { value: 1, label: 'Turist' },
    { value: 2, label: 'Biznes' },
    { value: 3, label: 'Akademik' }
];

const VisaLevels = [
    { value: 1, label: 'Yeni' },
    { value: 2, label: 'Davam Edən' },
    { value: 3, label: 'Sənəd Gözləyən' },
    { value: 4, label: 'Yoxlama Prosesində' },
    { value: 5, label: 'Sənədlər Təsdiqlənmiş' },
    { value: 6, label: 'Ləğv Edilmiş' }
];

const VisaStatuses = [
    { value: 1, label: 'Gözləmədə' },
    { value: 2, label: 'Təsdiqlənmiş' },
    { value: 3, label: 'Rədd Edilmiş' }
];

const VisaTypes = [
    { value: 1, label: 'Tək' },
    { value: 2, label: 'Çox' }
];
const countriesStatic = [
    { value: 1, label: 'Albaniya' },
    { value: 2, label: 'Andorra' },
    { value: 3, label: 'Avstriya' },
    { value: 4, label: 'Belarus' },
    { value: 5, label: 'Belçika' },
    { value: 6, label: 'Bosniya və Herseqovina' },
    { value: 7, label: 'Bolqarıstan' },
    { value: 8, label: 'Xorvatiya' },
    { value: 9, label: 'Kipr' },
    { value: 10, label: 'Çexiya' },
    { value: 11, label: 'Danimarka' },
    { value: 12, label: 'Estoniya' },
    { value: 13, label: 'Finlandiya' },
    { value: 14, label: 'Fransa' },
    { value: 15, label: 'Gürcüstan' },
    { value: 16, label: 'Almaniya' },
    { value: 17, label: 'Yunanıstan' },
    { value: 18, label: 'Macarıstan' },
    { value: 19, label: 'İslandiya' },
    { value: 20, label: 'İrlandiya' },
    { value: 21, label: 'İtaliya' },
    { value: 22, label: 'Kosovo' },
    { value: 23, label: 'Latviya' },
    { value: 24, label: 'Lixtenşteyn' },
    { value: 25, label: 'Litva' },
    { value: 26, label: 'Lüksemburq' },
    { value: 27, label: 'Malta' },
    { value: 28, label: 'Moldova' },
    { value: 29, label: 'Monako' },
    { value: 30, label: 'Monteneqro' },
    { value: 31, label: 'Niderland' },
    { value: 32, label: 'Şimali Makedoniya' },
    { value: 33, label: 'Norveç' },
    { value: 34, label: 'Polşa' },
    { value: 35, label: 'Portuqaliya' },
    { value: 36, label: 'Rumıniya' },
    { value: 37, label: 'Rusiya' },
    { value: 38, label: 'San Marino' },
    { value: 39, label: 'Serbiya' },
    { value: 40, label: 'Slovakya' },
    { value: 41, label: 'Sloveniya' },
    { value: 42, label: 'İspaniya' },
    { value: 43, label: 'İsveç' },
    { value: 44, label: 'İsveçrə' },
    { value: 45, label: 'Türkiyə' },
    { value: 46, label: 'Ukrayna' },
    { value: 47, label: 'Birləşmiş Krallıq' },
    { value: 48, label: 'Vatikan' }
];

function getEnumLabel(targetArray, id) {
    const foundItem = targetArray?.find(item => item?.value === id);
    return foundItem ? foundItem.label : noText;
}

function validateDates(firstDate, secondDate) {
    // Convert the date strings to Date objects
    const departureDate = new Date(firstDate);
    const returnDate = new Date(secondDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Check if the return date is before the departure date
    if (departureDate < today) {
        return { message: ' Gediş tarixi bugündən əvvəl ola bilməz', status: false }
    }

    if (returnDate < departureDate) {
        return { message: 'Gəliş tarixi Gediş tarixindən əvvəl ola bilməz', status: false }
    } else {
        return { message: null, status: true }
    }
}
const toBase64 = file => new Promise((resolve, reject) => {
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
});


export { getEnumLabel, validateDates, toBase64, countriesStatic, DocumentTypes, VisaCategories, VisaLevels, VisaStatuses, VisaTypes, }