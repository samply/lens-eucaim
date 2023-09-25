import { Criteria } from '@samply/lens-core';

export const Lokalisation: Criteria = new Criteria(
  'urn:oid:2.16.840.1.113883.6.43.1',
  {
    de: 'Lokalization (ICD-O-3 classification)',
    en: 'Localization (ICD-O-3 classification)',
  },
  'string',
  'http://terminology.hl7.org/CodeSystem/icd-o-3',
  ['EQUALS'],
  [
      {
        key: "C00",
        en: "",
        de: "Malignant neoplasm of lip",
      },
      {
        key: "C00.0",
        en: "",
        de: "Malignant neoplasm: External upper lip",
      },
      {
        key: "C00.1",
        en: "",
        de: "Malignant neoplasm: External lower lip",
      },
      {
        key: "C00.2",
        en: "",
        de: "Malignant neoplasm: External lip, unspecified",
      },
      {
        key: "C00.3",
        en: "",
        de: "Malignant neoplasm: Upper lip, inner aspect",
      },
      {
        key: "C00.4",
        en: "",
        de: "Malignant neoplasm: Lower lip, inner aspect",
      },
      {
        key: "C00.5",
        en: "",
        de: "Malignant neoplasm: Lip, unspecified, inner aspect",
      },
      {
        key: "C00.6",
        en: "",
        de: "Malignant neoplasm: Commissure of lip",
      },
      {
        key: "C00.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of lip",
      },
      {
        key: "C00.9",
        en: "",
        de: "Malignant neoplasm: Lip, unspecified",
      },
      {
        key: "C01",
        en: "",
        de: "Malignant neoplasm of base of tongue",
      },
      {
        key: "C02",
        en: "",
        de: "Malignant neoplasm of other and unspecified parts of tongue",
      },
      {
        key: "C02.0",
        en: "",
        de: "Malignant neoplasm: Dorsal surface of tongue",
      },
      {
        key: "C02.1",
        en: "",
        de: "Malignant neoplasm: Border of tongue",
      },
      {
        key: "C02.2",
        en: "",
        de: "Malignant neoplasm: Ventral surface of tongue",
      },
      {
        key: "C02.3",
        en: "",
        de: "Malignant neoplasm: Anterior two-thirds of tongue, part unspecified",
      },
      {
        key: "C02.4",
        en: "",
        de: "Malignant neoplasm: Lingual tonsil",
      },
      {
        key: "C02.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of tongue",
      },
      {
        key: "C02.9",
        en: "",
        de: "Malignant neoplasm: Tongue, unspecified",
      },
      {
        key: "C03",
        en: "",
        de: "Malignant neoplasm of gum",
      },
      {
        key: "C03.0",
        en: "",
        de: "Malignant neoplasm: Upper gum",
      },
      {
        key: "C03.1",
        en: "",
        de: "Malignant neoplasm: Lower gum",
      },
      {
        key: "C03.9",
        en: "",
        de: "Malignant neoplasm: Gum, unspecified",
      },
      {
        key: "C04",
        en: "",
        de: "Malignant neoplasm of floor of mouth",
      },
      {
        key: "C04.0",
        en: "",
        de: "Malignant neoplasm: Anterior floor of mouth",
      },
      {
        key: "C04.1",
        en: "",
        de: "Malignant neoplasm: Lateral floor of mouth",
      },
      {
        key: "C04.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of floor of mouth",
      },
      {
        key: "C04.9",
        en: "",
        de: "Malignant neoplasm: Floor of mouth, unspecified",
      },
      {
        key: "C05",
        en: "",
        de: "Malignant neoplasm of palate",
      },
      {
        key: "C05.0",
        en: "",
        de: "Malignant neoplasm: Hard palate",
      },
      {
        key: "C05.1",
        en: "",
        de: "Malignant neoplasm: Soft palate",
      },
      {
        key: "C05.2",
        en: "",
        de: "Malignant neoplasm: Uvula",
      },
      {
        key: "C05.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of palate",
      },
      {
        key: "C05.9",
        en: "",
        de: "Malignant neoplasm: Palate, unspecified",
      },
      {
        key: "C06",
        en: "",
        de: "Malignant neoplasm of other and unspecified parts of mouth",
      },
      {
        key: "C06.0",
        en: "",
        de: "Malignant neoplasm: Cheek mucosa",
      },
      {
        key: "C06.1",
        en: "",
        de: "Malignant neoplasm: Vestibule of mouth",
      },
      {
        key: "C06.2",
        en: "",
        de: "Malignant neoplasm: Retromolar area",
      },
      {
        key: "C06.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of other and unspecified parts of mouth",
      },
      {
        key: "C06.9",
        en: "",
        de: "Malignant neoplasm: Mouth, unspecified",
      },
      {
        key: "C07",
        en: "",
        de: "Malignant neoplasm of parotid gland",
      },
      {
        key: "C08",
        en: "",
        de: "Malignant neoplasm of other and unspecified major salivary glands",
      },
      {
        key: "C08.0",
        en: "",
        de: "Malignant neoplasm: Submandibular gland",
      },
      {
        key: "C08.1",
        en: "",
        de: "Malignant neoplasm: Sublingual gland",
      },
      {
        key: "C08.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of major salivary glands",
      },
      {
        key: "C08.9",
        en: "",
        de: "Malignant neoplasm: Major salivary gland, unspecified",
      },
      {
        key: "C09",
        en: "",
        de: "Malignant neoplasm of tonsil",
      },
      {
        key: "C09.0",
        en: "",
        de: "Malignant neoplasm: Tonsillar fossa",
      },
      {
        key: "C09.1",
        en: "",
        de: "Malignant neoplasm: Tonsillar pillar (anterior)(posterior)",
      },
      {
        key: "C09.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of tonsil",
      },
      {
        key: "C09.9",
        en: "",
        de: "Malignant neoplasm: Tonsil, unspecified",
      },
      {
        key: "C10",
        en: "",
        de: "Malignant neoplasm of oropharynx",
      },
      {
        key: "C10.0",
        en: "",
        de: "Malignant neoplasm: Vallecula",
      },
      {
        key: "C10.1",
        en: "",
        de: "Malignant neoplasm: Anterior surface of epiglottis",
      },
      {
        key: "C10.2",
        en: "",
        de: "Malignant neoplasm: Lateral wall of oropharynx",
      },
      {
        key: "C10.3",
        en: "",
        de: "Malignant neoplasm: Posterior wall of oropharynx",
      },
      {
        key: "C10.4",
        en: "",
        de: "Malignant neoplasm: Branchial cleft",
      },
      {
        key: "C10.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of oropharynx",
      },
      {
        key: "C10.9",
        en: "",
        de: "Malignant neoplasm: Oropharynx, unspecified",
      },
      {
        key: "C11",
        en: "",
        de: "Malignant neoplasm of nasopharynx",
      },
      {
        key: "C11.0",
        en: "",
        de: "Malignant neoplasm: Superior wall of nasopharynx",
      },
      {
        key: "C11.1",
        en: "",
        de: "Malignant neoplasm: Posterior wall of nasopharynx",
      },
      {
        key: "C11.2",
        en: "",
        de: "Malignant neoplasm: Lateral wall of nasopharynx",
      },
      {
        key: "C11.3",
        en: "",
        de: "Malignant neoplasm: Anterior wall of nasopharynx",
      },
      {
        key: "C11.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of nasopharynx",
      },
      {
        key: "C11.9",
        en: "",
        de: "Malignant neoplasm: Nasopharynx, unspecified",
      },
      {
        key: "C12",
        en: "",
        de: "Malignant neoplasm of piriform sinus",
      },
      {
        key: "C13",
        en: "",
        de: "Malignant neoplasm of hypopharynx",
      },
      {
        key: "C13.0",
        en: "",
        de: "Malignant neoplasm: Postcricoid region",
      },
      {
        key: "C13.1",
        en: "",
        de: "Malignant neoplasm: Aryepiglottic fold, hypopharyngeal aspect",
      },
      {
        key: "C13.2",
        en: "",
        de: "Malignant neoplasm: Posterior wall of hypopharynx",
      },
      {
        key: "C13.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of hypopharynx",
      },
      {
        key: "C13.9",
        en: "",
        de: "Malignant neoplasm: Hypopharynx, unspecified",
      },
      {
        key: "C14",
        en: "",
        de: "Malignant neoplasm of other and ill-defined sites in the lip, oral cavity and pharynx",
      },
      {
        key: "C14.0",
        en: "",
        de: "Malignant neoplasm: Pharynx, unspecified",
      },
      {
        key: "C14.2",
        en: "",
        de: "Malignant neoplasm: Waldeyer ring",
      },
      {
        key: "C14.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of lip, oral cavity and pharynx",
      },
      {
        key: "C15",
        en: "",
        de: "Malignant neoplasm of oesophagus",
      },
      {
        key: "C15.0",
        en: "",
        de: "Malignant neoplasm: Cervical part of oesophagus",
      },
      {
        key: "C15.1",
        en: "",
        de: "Malignant neoplasm: Thoracic part of oesophagus",
      },
      {
        key: "C15.2",
        en: "",
        de: "Malignant neoplasm: Abdominal part of oesophagus",
      },
      {
        key: "C15.3",
        en: "",
        de: "Malignant neoplasm: Upper third of oesophagus",
      },
      {
        key: "C15.4",
        en: "",
        de: "Malignant neoplasm: Middle third of oesophagus",
      },
      {
        key: "C15.5",
        en: "",
        de: "Malignant neoplasm: Lower third of oesophagus",
      },
      {
        key: "C15.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of oesophagus",
      },
      {
        key: "C15.9",
        en: "",
        de: "Malignant neoplasm: Oesophagus, unspecified",
      },
      {
        key: "C16",
        en: "",
        de: "Malignant neoplasm of stomach",
      },
      {
        key: "C16.0",
        en: "",
        de: "Malignant neoplasm: Cardia",
      },
      {
        key: "C16.1",
        en: "",
        de: "Malignant neoplasm: Fundus of stomach",
      },
      {
        key: "C16.2",
        en: "",
        de: "Malignant neoplasm: Body of stomach",
      },
      {
        key: "C16.3",
        en: "",
        de: "Malignant neoplasm: Pyloric antrum",
      },
      {
        key: "C16.4",
        en: "",
        de: "Malignant neoplasm: Pylorus",
      },
      {
        key: "C16.5",
        en: "",
        de: "Malignant neoplasm: Lesser curvature of stomach, unspecified",
      },
      {
        key: "C16.6",
        en: "",
        de: "Malignant neoplasm: Greater curvature of stomach, unspecified",
      },
      {
        key: "C16.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of stomach",
      },
      {
        key: "C16.9",
        en: "",
        de: "Malignant neoplasm: Stomach, unspecified",
      },
      {
        key: "C17",
        en: "",
        de: "Malignant neoplasm of small intestine",
      },
      {
        key: "C17.0",
        en: "",
        de: "Malignant neoplasm: Duodenum",
      },
      {
        key: "C17.1",
        en: "",
        de: "Malignant neoplasm: Jejunum",
      },
      {
        key: "C17.2",
        en: "",
        de: "Malignant neoplasm: Ileum",
      },
      {
        key: "C17.3",
        en: "",
        de: "Malignant neoplasm: Meckel diverticulum",
      },
      {
        key: "C17.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of small intestine",
      },
      {
        key: "C17.9",
        en: "",
        de: "Malignant neoplasm: Small intestine, unspecified",
      },
      {
        key: "C18",
        en: "",
        de: "Malignant neoplasm of colon",
      },
      {
        key: "C18.0",
        en: "",
        de: "Malignant neoplasm: Caecum",
      },
      {
        key: "C18.1",
        en: "",
        de: "Malignant neoplasm: Appendix",
      },
      {
        key: "C18.2",
        en: "",
        de: "Malignant neoplasm: Ascending colon",
      },
      {
        key: "C18.3",
        en: "",
        de: "Malignant neoplasm: Hepatic flexure",
      },
      {
        key: "C18.4",
        en: "",
        de: "Malignant neoplasm: Transverse colon",
      },
      {
        key: "C18.5",
        en: "",
        de: "Malignant neoplasm: Splenic flexure",
      },
      {
        key: "C18.6",
        en: "",
        de: "Malignant neoplasm: Descending colon",
      },
      {
        key: "C18.7",
        en: "",
        de: "Malignant neoplasm: Sigmoid colon",
      },
      {
        key: "C18.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of colon",
      },
      {
        key: "C18.9",
        en: "",
        de: "Malignant neoplasm: Colon, unspecified",
      },
      {
        key: "C19",
        en: "",
        de: "Malignant neoplasm of rectosigmoid junction",
      },
      {
        key: "C20",
        en: "",
        de: "Malignant neoplasm of rectum",
      },
      {
        key: "C21",
        en: "",
        de: "Malignant neoplasm of anus and anal canal",
      },
      {
        key: "C21.0",
        en: "",
        de: "Malignant neoplasm: Anus, unspecified",
      },
      {
        key: "C21.1",
        en: "",
        de: "Malignant neoplasm: Anal canal",
      },
      {
        key: "C21.2",
        en: "",
        de: "Malignant neoplasm: Cloacogenic zone",
      },
      {
        key: "C21.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of rectum, anus and anal canal",
      },
      {
        key: "C22",
        en: "",
        de: "Malignant neoplasm of liver and intrahepatic bile ducts",
      },
      {
        key: "C22.0",
        en: "",
        de: "Malignant neoplasm: Liver cell carcinoma",
      },
      {
        key: "C22.1",
        en: "",
        de: "Malignant neoplasm: Intrahepatic bile duct carcinoma",
      },
      {
        key: "C22.2",
        en: "",
        de: "Malignant neoplasm: Hepatoblastoma",
      },
      {
        key: "C22.3",
        en: "",
        de: "Malignant neoplasm: Angiosarcoma of liver",
      },
      {
        key: "C22.4",
        en: "",
        de: "Malignant neoplasm: Other sarcomas of liver",
      },
      {
        key: "C22.7",
        en: "",
        de: "Malignant neoplasm: Other specified carcinomas of liver",
      },
      {
        key: "C22.9",
        en: "",
        de: "Malignant neoplasm: Liver, unspecified",
      },
      {
        key: "C23",
        en: "",
        de: "Malignant neoplasm of gallbladder",
      },
      {
        key: "C24",
        en: "",
        de: "Malignant neoplasm of other and unspecified parts of biliary tract",
      },
      {
        key: "C24.0",
        en: "",
        de: "Malignant neoplasm: Extrahepatic bile duct",
      },
      {
        key: "C24.1",
        en: "",
        de: "Malignant neoplasm: Ampulla of Vater",
      },
      {
        key: "C24.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of biliary tract",
      },
      {
        key: "C24.9",
        en: "",
        de: "Malignant neoplasm: Biliary tract, unspecified",
      },
      {
        key: "C25",
        en: "",
        de: "Malignant neoplasm of pancreas",
      },
      {
        key: "C25.0",
        en: "",
        de: "Malignant neoplasm: Head of pancreas",
      },
      {
        key: "C25.1",
        en: "",
        de: "Malignant neoplasm: Body of pancreas",
      },
      {
        key: "C25.2",
        en: "",
        de: "Malignant neoplasm: Tail of pancreas",
      },
      {
        key: "C25.3",
        en: "",
        de: "Malignant neoplasm: Pancreatic duct",
      },
      {
        key: "C25.4",
        en: "",
        de: "Malignant neoplasm: Endocrine pancreas",
      },
      {
        key: "C25.7",
        en: "",
        de: "Malignant neoplasm: Other parts of pancreas",
      },
      {
        key: "C25.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of pancreas",
      },
      {
        key: "C25.9",
        en: "",
        de: "Malignant neoplasm: Pancreas, unspecified",
      },
      {
        key: "C26",
        en: "",
        de: "Malignant neoplasm of other and ill-defined digestive organs",
      },
      {
        key: "C26.0",
        en: "",
        de: "Malignant neoplasm: Intestinal tract, part unspecified",
      },
      {
        key: "C26.1",
        en: "",
        de: "Malignant neoplasm: Spleen",
      },
      {
        key: "C26.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of digestive system",
      },
      {
        key: "C26.9",
        en: "",
        de: "Malignant neoplasm: Ill-defined sites within the digestive system",
      },
      {
        key: "C30",
        en: "",
        de: "Malignant neoplasm of nasal cavity and middle ear",
      },
      {
        key: "C30.0",
        en: "",
        de: "Malignant neoplasm: Nasal cavity",
      },
      {
        key: "C30.1",
        en: "",
        de: "Malignant neoplasm: Middle ear",
      },
      {
        key: "C31",
        en: "",
        de: "Malignant neoplasm of accessory sinuses",
      },
      {
        key: "C31.0",
        en: "",
        de: "Malignant neoplasm: Maxillary sinus",
      },
      {
        key: "C31.1",
        en: "",
        de: "Malignant neoplasm: Ethmoidal sinus",
      },
      {
        key: "C31.2",
        en: "",
        de: "Malignant neoplasm: Frontal sinus",
      },
      {
        key: "C31.3",
        en: "",
        de: "Malignant neoplasm: Sphenoidal sinus",
      },
      {
        key: "C31.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of accessory sinuses",
      },
      {
        key: "C31.9",
        en: "",
        de: "Malignant neoplasm: Accessory sinus, unspecified",
      },
      {
        key: "C32",
        en: "",
        de: "Malignant neoplasm of larynx",
      },
      {
        key: "C32.0",
        en: "",
        de: "Malignant neoplasm: Glottis",
      },
      {
        key: "C32.1",
        en: "",
        de: "Malignant neoplasm: Supraglottis",
      },
      {
        key: "C32.2",
        en: "",
        de: "Malignant neoplasm: Subglottis",
      },
      {
        key: "C32.3",
        en: "",
        de: "Malignant neoplasm: Laryngeal cartilage",
      },
      {
        key: "C32.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of larynx",
      },
      {
        key: "C32.9",
        en: "",
        de: "Malignant neoplasm: Larynx, unspecified",
      },
      {
        key: "C33",
        en: "",
        de: "Malignant neoplasm of trachea",
      },
      {
        key: "C34",
        en: "",
        de: "Malignant neoplasm of bronchus and lung",
      },
      {
        key: "C34.0",
        en: "",
        de: "Malignant neoplasm: Main bronchus",
      },
      {
        key: "C34.1",
        en: "",
        de: "Malignant neoplasm: Upper lobe, bronchus or lung",
      },
      {
        key: "C34.2",
        en: "",
        de: "Malignant neoplasm: Middle lobe, bronchus or lung",
      },
      {
        key: "C34.3",
        en: "",
        de: "Malignant neoplasm: Lower lobe, bronchus or lung",
      },
      {
        key: "C34.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of bronchus and lung",
      },
      {
        key: "C34.9",
        en: "",
        de: "Malignant neoplasm: Bronchus or lung, unspecified",
      },
      {
        key: "C37",
        en: "",
        de: "Malignant neoplasm of thymus",
      },
      {
        key: "C38",
        en: "",
        de: "Malignant neoplasm of heart, mediastinum and pleura",
      },
      {
        key: "C38.0",
        en: "",
        de: "Malignant neoplasm: Heart",
      },
      {
        key: "C38.1",
        en: "",
        de: "Malignant neoplasm: Anterior mediastinum",
      },
      {
        key: "C38.2",
        en: "",
        de: "Malignant neoplasm: Posterior mediastinum",
      },
      {
        key: "C38.3",
        en: "",
        de: "Malignant neoplasm: Mediastinum, part unspecified",
      },
      {
        key: "C38.4",
        en: "",
        de: "Malignant neoplasm: Pleura",
      },
      {
        key: "C38.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of heart, mediastinum and pleura",
      },
      {
        key: "C39",
        en: "",
        de: "Malignant neoplasm of other and ill-defined sites in the respiratory system and intrathoracic organs",
      },
      {
        key: "C39.0",
        en: "",
        de: "Malignant neoplasm: Upper respiratory tract, part unspecified",
      },
      {
        key: "C39.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of respiratory and intrathoracic organs",
      },
      {
        key: "C39.9",
        en: "",
        de: "Malignant neoplasm: Ill-defined sites within the respiratory system",
      },
      {
        key: "C40",
        en: "",
        de: "Malignant neoplasm of bone and articular cartilage of limbs",
      },
      {
        key: "C40.0",
        en: "",
        de: "Malignant neoplasm: Scapula and long bones of upper limb",
      },
      {
        key: "C40.1",
        en: "",
        de: "Malignant neoplasm: Short bones of upper limb",
      },
      {
        key: "C40.2",
        en: "",
        de: "Malignant neoplasm: Long bones of lower limb",
      },
      {
        key: "C40.3",
        en: "",
        de: "Malignant neoplasm: Short bones of lower limb",
      },
      {
        key: "C40.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of bone and articular cartilage of limbs",
      },
      {
        key: "C40.9",
        en: "",
        de: "Malignant neoplasm: Bone and articular cartilage of limb, unspecified",
      },
      {
        key: "C41",
        en: "",
        de: "Malignant neoplasm of bone and articular cartilage of other and unspecified sites",
      },
      {
        key: "C41.0",
        en: "",
        de: "Malignant neoplasm: Bones of skull and face",
      },
      {
        key: "C41.1",
        en: "",
        de: "Malignant neoplasm: Mandible",
      },
      {
        key: "C41.2",
        en: "",
        de: "Malignant neoplasm: Vertebral column",
      },
      {
        key: "C41.3",
        en: "",
        de: "Malignant neoplasm: Ribs, sternum and clavicle",
      },
      {
        key: "C41.4",
        en: "",
        de: "Malignant neoplasm: Pelvic bones, sacrum and coccyx",
      },
      {
        key: "C41.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of bone and articular cartilage",
      },
      {
        key: "C41.9",
        en: "",
        de: "Malignant neoplasm: Bone and articular cartilage, unspecified",
      },
      {
        key: "C43",
        en: "",
        de: "Malignant melanoma of skin",
      },
      {
        key: "C43.0",
        en: "",
        de: "Malignant neoplasm: Malignant melanoma of lip",
      },
      {
        key: "C43.1",
        en: "",
        de: "Malignant neoplasm: Malignant melanoma of eyelid, including canthus",
      },
      {
        key: "C43.2",
        en: "",
        de: "Malignant neoplasm: Malignant melanoma of ear and external auricular canal",
      },
      {
        key: "C43.3",
        en: "",
        de: "Malignant neoplasm: Malignant melanoma of other and unspecified parts of face",
      },
      {
        key: "C43.4",
        en: "",
        de: "Malignant neoplasm: Malignant melanoma of scalp and neck",
      },
      {
        key: "C43.5",
        en: "",
        de: "Malignant neoplasm: Malignant melanoma of trunk",
      },
      {
        key: "C43.6",
        en: "",
        de: "Malignant neoplasm: Malignant melanoma of upper limb, including shoulder",
      },
      {
        key: "C43.7",
        en: "",
        de: "Malignant neoplasm: Malignant melanoma of lower limb, including hip",
      },
      {
        key: "C43.8",
        en: "",
        de: "Malignant neoplasm: Overlapping malignant melanoma of skin",
      },
      {
        key: "C43.9",
        en: "",
        de: "Malignant neoplasm: Malignant melanoma of skin, unspecified",
      },
      {
        key: "C44",
        en: "",
        de: "Other malignant neoplasms of skin",
      },
      {
        key: "C44.0",
        en: "",
        de: "Malignant neoplasm: Skin of lip",
      },
      {
        key: "C44.1",
        en: "",
        de: "Malignant neoplasm: Skin of eyelid, including canthus",
      },
      {
        key: "C44.2",
        en: "",
        de: "Malignant neoplasm: Skin of ear and external auricular canal",
      },
      {
        key: "C44.3",
        en: "",
        de: "Malignant neoplasm: Skin of other and unspecified parts of face",
      },
      {
        key: "C44.4",
        en: "",
        de: "Malignant neoplasm: Skin of scalp and neck",
      },
      {
        key: "C44.5",
        en: "",
        de: "Malignant neoplasm: Skin of trunk",
      },
      {
        key: "C44.6",
        en: "",
        de: "Malignant neoplasm: Skin of upper limb, including shoulder",
      },
      {
        key: "C44.7",
        en: "",
        de: "Malignant neoplasm: Skin of lower limb, including hip",
      },
      {
        key: "C44.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of skin",
      },
      {
        key: "C44.9",
        en: "",
        de: "Malignant neoplasm: Malignant neoplasm of skin, unspecified",
      },
      {
        key: "C45",
        en: "",
        de: "Mesothelioma",
      },
      {
        key: "C45.0",
        en: "",
        de: "Mesothelioma of pleura",
      },
      {
        key: "C45.1",
        en: "",
        de: "Mesothelioma of peritoneum",
      },
      {
        key: "C45.2",
        en: "",
        de: "Mesothelioma of pericardium",
      },
      {
        key: "C45.7",
        en: "",
        de: "Mesothelioma of other sites",
      },
      {
        key: "C45.9",
        en: "",
        de: "Mesothelioma, unspecified",
      },
      {
        key: "C46",
        en: "",
        de: "Kaposi sarcoma",
      },
      {
        key: "C46.0",
        en: "",
        de: "Kaposi sarcoma of skin",
      },
      {
        key: "C46.1",
        en: "",
        de: "Kaposi sarcoma of soft tissue",
      },
      {
        key: "C46.2",
        en: "",
        de: "Kaposi sarcoma of palate",
      },
      {
        key: "C46.3",
        en: "",
        de: "Kaposi sarcoma of lymph nodes",
      },
      {
        key: "C46.7",
        en: "",
        de: "Kaposi sarcoma of other sites",
      },
      {
        key: "C46.8",
        en: "",
        de: "Kaposi sarcoma of multiple organs",
      },
      {
        key: "C46.9",
        en: "",
        de: "Kaposi sarcoma, unspecified",
      },
      {
        key: "C47",
        en: "",
        de: "Malignant neoplasm of peripheral nerves and autonomic nervous system",
      },
      {
        key: "C47.0",
        en: "",
        de: "Malignant neoplasm: Peripheral nerves of head, face and neck",
      },
      {
        key: "C47.1",
        en: "",
        de: "Malignant neoplasm: Peripheral nerves of upper limb, including shoulder",
      },
      {
        key: "C47.2",
        en: "",
        de: "Malignant neoplasm: Peripheral nerves of lower limb, including hip",
      },
      {
        key: "C47.3",
        en: "",
        de: "Malignant neoplasm: Peripheral nerves of thorax",
      },
      {
        key: "C47.4",
        en: "",
        de: "Malignant neoplasm: Peripheral nerves of abdomen",
      },
      {
        key: "C47.5",
        en: "",
        de: "Malignant neoplasm: Peripheral nerves of pelvis",
      },
      {
        key: "C47.6",
        en: "",
        de: "Malignant neoplasm: Peripheral nerves of trunk, unspecified",
      },
      {
        key: "C47.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of peripheral nerves and autonomic nervous system",
      },
      {
        key: "C47.9",
        en: "",
        de: "Malignant neoplasm: Peripheral nerves and autonomic nervous system, unspecified",
      },
      {
        key: "C48",
        en: "",
        de: "Malignant neoplasm of retroperitoneum and peritoneum",
      },
      {
        key: "C48.0",
        en: "",
        de: "Malignant neoplasm: Retroperitoneum",
      },
      {
        key: "C48.1",
        en: "",
        de: "Malignant neoplasm: Specified parts of peritoneum",
      },
      {
        key: "C48.2",
        en: "",
        de: "Malignant neoplasm: Peritoneum, unspecified",
      },
      {
        key: "C48.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of retroperitoneum and peritoneum",
      },
      {
        key: "C49",
        en: "",
        de: "Malignant neoplasm of other connective and soft tissue",
      },
      {
        key: "C49.0",
        en: "",
        de: "Malignant neoplasm: Connective and soft tissue of head, face and neck",
      },
      {
        key: "C49.1",
        en: "",
        de: "Malignant neoplasm: Connective and soft tissue of upper limb, including shoulder",
      },
      {
        key: "C49.2",
        en: "",
        de: "Malignant neoplasm: Connective and soft tissue of lower limb, including hip",
      },
      {
        key: "C49.3",
        en: "",
        de: "Malignant neoplasm: Connective and soft tissue of thorax",
      },
      {
        key: "C49.4",
        en: "",
        de: "Malignant neoplasm: Connective and soft tissue of abdomen",
      },
      {
        key: "C49.5",
        en: "",
        de: "Malignant neoplasm: Connective and soft tissue of pelvis",
      },
      {
        key: "C49.6",
        en: "",
        de: "Malignant neoplasm: Connective and soft tissue of trunk, unspecified",
      },
      {
        key: "C49.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of connective and soft tissue",
      },
      {
        key: "C49.9",
        en: "",
        de: "Malignant neoplasm: Connective and soft tissue, unspecified",
      },
      {
        key: "C50",
        en: "",
        de: "Malignant neoplasm of breast",
      },
      {
        key: "C50.0",
        en: "",
        de: "Malignant neoplasm: Nipple and areola",
      },
      {
        key: "C50.1",
        en: "",
        de: "Malignant neoplasm: Central portion of breast",
      },
      {
        key: "C50.2",
        en: "",
        de: "Malignant neoplasm: Upper-inner quadrant of breast",
      },
      {
        key: "C50.3",
        en: "",
        de: "Malignant neoplasm: Lower-inner quadrant of breast",
      },
      {
        key: "C50.4",
        en: "",
        de: "Malignant neoplasm: Upper-outer quadrant of breast",
      },
      {
        key: "C50.5",
        en: "",
        de: "Malignant neoplasm: Lower-outer quadrant of breast",
      },
      {
        key: "C50.6",
        en: "",
        de: "Malignant neoplasm: Axillary tail of breast",
      },
      {
        key: "C50.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of breast",
      },
      {
        key: "C50.9",
        en: "",
        de: "Malignant neoplasm: Breast, unspecified",
      },
      {
        key: "C51",
        en: "",
        de: "Malignant neoplasm of vulva",
      },
      {
        key: "C51.0",
        en: "",
        de: "Malignant neoplasm: Labium majus",
      },
      {
        key: "C51.1",
        en: "",
        de: "Malignant neoplasm: Labium minus",
      },
      {
        key: "C51.2",
        en: "",
        de: "Malignant neoplasm: Clitoris",
      },
      {
        key: "C51.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of vulva",
      },
      {
        key: "C51.9",
        en: "",
        de: "Malignant neoplasm: Vulva, unspecified",
      },
      {
        key: "C52",
        en: "",
        de: "Malignant neoplasm of vagina",
      },
      {
        key: "C53",
        en: "",
        de: "Malignant neoplasm of cervix uteri",
      },
      {
        key: "C53.0",
        en: "",
        de: "Malignant neoplasm: Endocervix",
      },
      {
        key: "C53.1",
        en: "",
        de: "Malignant neoplasm: Exocervix",
      },
      {
        key: "C53.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of cervix uteri",
      },
      {
        key: "C53.9",
        en: "",
        de: "Malignant neoplasm: Cervix uteri, unspecified",
      },
      {
        key: "C54",
        en: "",
        de: "Malignant neoplasm of corpus uteri",
      },
      {
        key: "C54.0",
        en: "",
        de: "Malignant neoplasm: Isthmus uteri",
      },
      {
        key: "C54.1",
        en: "",
        de: "Malignant neoplasm: Endometrium",
      },
      {
        key: "C54.2",
        en: "",
        de: "Malignant neoplasm: Myometrium",
      },
      {
        key: "C54.3",
        en: "",
        de: "Malignant neoplasm: Fundus uteri",
      },
      {
        key: "C54.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of corpus uteri",
      },
      {
        key: "C54.9",
        en: "",
        de: "Malignant neoplasm: Corpus uteri, unspecified",
      },
      {
        key: "C55",
        en: "",
        de: "Malignant neoplasm of uterus, part unspecified",
      },
      {
        key: "C56",
        en: "",
        de: "Malignant neoplasm of ovary",
      },
      {
        key: "C57",
        en: "",
        de: "Malignant neoplasm of other and unspecified female genital organs",
      },
      {
        key: "C57.0",
        en: "",
        de: "Malignant neoplasm: Fallopian tube",
      },
      {
        key: "C57.1",
        en: "",
        de: "Malignant neoplasm: Broad ligament",
      },
      {
        key: "C57.2",
        en: "",
        de: "Malignant neoplasm: Round ligament",
      },
      {
        key: "C57.3",
        en: "",
        de: "Malignant neoplasm: Parametrium",
      },
      {
        key: "C57.4",
        en: "",
        de: "Malignant neoplasm: Uterine adnexa, unspecified",
      },
      {
        key: "C57.7",
        en: "",
        de: "Malignant neoplasm: Other specified female genital organs",
      },
      {
        key: "C57.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of female genital organs",
      },
      {
        key: "C57.9",
        en: "",
        de: "Malignant neoplasm: Female genital organ, unspecified",
      },
      {
        key: "C58",
        en: "",
        de: "Malignant neoplasm of placenta",
      },
      {
        key: "C60",
        en: "",
        de: "Malignant neoplasm of penis",
      },
      {
        key: "C60.0",
        en: "",
        de: "Malignant neoplasm: Prepuce",
      },
      {
        key: "C60.1",
        en: "",
        de: "Malignant neoplasm: Glans penis",
      },
      {
        key: "C60.2",
        en: "",
        de: "Malignant neoplasm: Body of penis",
      },
      {
        key: "C60.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of penis",
      },
      {
        key: "C60.9",
        en: "",
        de: "Malignant neoplasm: Penis, unspecified",
      },
      {
        key: "C61",
        en: "",
        de: "Malignant neoplasm of prostate",
      },
      {
        key: "C62",
        en: "",
        de: "Malignant neoplasm of testis",
      },
      {
        key: "C62.0",
        en: "",
        de: "Malignant neoplasm: Undescended testis",
      },
      {
        key: "C62.1",
        en: "",
        de: "Malignant neoplasm: Descended testis",
      },
      {
        key: "C62.9",
        en: "",
        de: "Malignant neoplasm: Testis, unspecified",
      },
      {
        key: "C63",
        en: "",
        de: "Malignant neoplasm of other and unspecified male genital organs",
      },
      {
        key: "C63.0",
        en: "",
        de: "Malignant neoplasm: Epididymis",
      },
      {
        key: "C63.1",
        en: "",
        de: "Malignant neoplasm: Spermatic cord",
      },
      {
        key: "C63.2",
        en: "",
        de: "Malignant neoplasm: Scrotum",
      },
      {
        key: "C63.7",
        en: "",
        de: "Malignant neoplasm: Other specified male genital organs",
      },
      {
        key: "C63.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of male genital organs",
      },
      {
        key: "C63.9",
        en: "",
        de: "Malignant neoplasm: Male genital organ, unspecified",
      },
      {
        key: "C64",
        en: "",
        de: "Malignant neoplasm of kidney, except renal pelvis",
      },
      {
        key: "C65",
        en: "",
        de: "Malignant neoplasm of renal pelvis",
      },
      {
        key: "C66",
        en: "",
        de: "Malignant neoplasm of ureter",
      },
      {
        key: "C67",
        en: "",
        de: "Malignant neoplasm of bladder",
      },
      {
        key: "C67.0",
        en: "",
        de: "Malignant neoplasm: Trigone of bladder",
      },
      {
        key: "C67.1",
        en: "",
        de: "Malignant neoplasm: Dome of bladder",
      },
      {
        key: "C67.2",
        en: "",
        de: "Malignant neoplasm: Lateral wall of bladder",
      },
      {
        key: "C67.3",
        en: "",
        de: "Malignant neoplasm: Anterior wall of bladder",
      },
      {
        key: "C67.4",
        en: "",
        de: "Malignant neoplasm: Posterior wall of bladder",
      },
      {
        key: "C67.5",
        en: "",
        de: "Malignant neoplasm: Bladder neck",
      },
      {
        key: "C67.6",
        en: "",
        de: "Malignant neoplasm: Ureteric orifice",
      },
      {
        key: "C67.7",
        en: "",
        de: "Malignant neoplasm: Urachus",
      },
      {
        key: "C67.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of bladder",
      },
      {
        key: "C67.9",
        en: "",
        de: "Malignant neoplasm: Bladder, unspecified",
      },
      {
        key: "C68",
        en: "",
        de: "Malignant neoplasm of other and unspecified urinary organs",
      },
      {
        key: "C68.0",
        en: "",
        de: "Malignant neoplasm: Urethra",
      },
      {
        key: "C68.1",
        en: "",
        de: "Malignant neoplasm: Paraurethral gland",
      },
      {
        key: "C68.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of urinary organs",
      },
      {
        key: "C68.9",
        en: "",
        de: "Malignant neoplasm: Urinary organ, unspecified",
      },
      {
        key: "C69",
        en: "",
        de: "Malignant neoplasm of eye and adnexa",
      },
      {
        key: "C69.0",
        en: "",
        de: "Malignant neoplasm: Conjunctiva",
      },
      {
        key: "C69.1",
        en: "",
        de: "Malignant neoplasm: Cornea",
      },
      {
        key: "C69.2",
        en: "",
        de: "Malignant neoplasm: Retina",
      },
      {
        key: "C69.3",
        en: "",
        de: "Malignant neoplasm: Choroid",
      },
      {
        key: "C69.4",
        en: "",
        de: "Malignant neoplasm: Ciliary body",
      },
      {
        key: "C69.5",
        en: "",
        de: "Malignant neoplasm: Lacrimal gland and duct",
      },
      {
        key: "C69.6",
        en: "",
        de: "Malignant neoplasm: Orbit",
      },
      {
        key: "C69.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of eye and adnexa",
      },
      {
        key: "C69.9",
        en: "",
        de: "Malignant neoplasm: Eye, unspecified",
      },
      {
        key: "C70",
        en: "",
        de: "Malignant neoplasm of meninges",
      },
      {
        key: "C70.0",
        en: "",
        de: "Malignant neoplasm: Cerebral meninges",
      },
      {
        key: "C70.1",
        en: "",
        de: "Malignant neoplasm: Spinal meninges",
      },
      {
        key: "C70.9",
        en: "",
        de: "Malignant neoplasm: Meninges, unspecified",
      },
      {
        key: "C71",
        en: "",
        de: "Malignant neoplasm of brain",
      },
      {
        key: "C71.0",
        en: "",
        de: "Malignant neoplasm: Cerebrum, except lobes and ventricles",
      },
      {
        key: "C71.1",
        en: "",
        de: "Malignant neoplasm: Frontal lobe",
      },
      {
        key: "C71.2",
        en: "",
        de: "Malignant neoplasm: Temporal lobe",
      },
      {
        key: "C71.3",
        en: "",
        de: "Malignant neoplasm: Parietal lobe",
      },
      {
        key: "C71.4",
        en: "",
        de: "Malignant neoplasm: Occipital lobe",
      },
      {
        key: "C71.5",
        en: "",
        de: "Malignant neoplasm: Cerebral ventricle",
      },
      {
        key: "C71.6",
        en: "",
        de: "Malignant neoplasm: Cerebellum",
      },
      {
        key: "C71.7",
        en: "",
        de: "Malignant neoplasm: Brain stem",
      },
      {
        key: "C71.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of brain",
      },
      {
        key: "C71.9",
        en: "",
        de: "Malignant neoplasm: Brain, unspecified",
      },
      {
        key: "C72",
        en: "",
        de: "Malignant neoplasm of spinal cord, cranial nerves and other parts of central nervous system",
      },
      {
        key: "C72.0",
        en: "",
        de: "Malignant neoplasm: Spinal cord",
      },
      {
        key: "C72.1",
        en: "",
        de: "Malignant neoplasm: Cauda equina",
      },
      {
        key: "C72.2",
        en: "",
        de: "Malignant neoplasm: Olfactory nerve",
      },
      {
        key: "C72.3",
        en: "",
        de: "Malignant neoplasm: Optic nerve",
      },
      {
        key: "C72.4",
        en: "",
        de: "Malignant neoplasm: Acoustic nerve",
      },
      {
        key: "C72.5",
        en: "",
        de: "Malignant neoplasm: Other and unspecified cranial nerves",
      },
      {
        key: "C72.8",
        en: "",
        de: "Malignant neoplasm: Overlapping lesion of brain and other parts of central nervous system",
      },
      {
        key: "C72.9",
        en: "",
        de: "Malignant neoplasm: Central nervous system, unspecified",
      },
      {
        key: "C73",
        en: "",
        de: "Malignant neoplasm of thyroid gland",
      },
      {
        key: "C74",
        en: "",
        de: "Malignant neoplasm of adrenal gland",
      },
      {
        key: "C74.0",
        en: "",
        de: "Malignant neoplasm: Cortex of adrenal gland",
      },
      {
        key: "C74.1",
        en: "",
        de: "Malignant neoplasm: Medulla of adrenal gland",
      },
      {
        key: "C74.9",
        en: "",
        de: "Malignant neoplasm: Adrenal gland, unspecified",
      },
      {
        key: "C75",
        en: "",
        de: "Malignant neoplasm of other endocrine glands and related structures",
      },
      {
        key: "C75.0",
        en: "",
        de: "Malignant neoplasm: Parathyroid gland",
      },
      {
        key: "C75.1",
        en: "",
        de: "Malignant neoplasm: Pituitary gland",
      },
      {
        key: "C75.2",
        en: "",
        de: "Malignant neoplasm: Craniopharyngeal duct",
      },
      {
        key: "C75.3",
        en: "",
        de: "Malignant neoplasm: Pineal gland",
      },
      {
        key: "C75.4",
        en: "",
        de: "Malignant neoplasm: Carotid body",
      },
      {
        key: "C75.5",
        en: "",
        de: "Malignant neoplasm: Aortic body and other paraganglia",
      },
      {
        key: "C75.8",
        en: "",
        de: "Malignant neoplasm: Pluriglandular involvement, unspecified",
      },
      {
        key: "C75.9",
        en: "",
        de: "Malignant neoplasm: Endocrine gland, unspecified",
      },
      {
        key: "C76",
        en: "",
        de: "Malignant neoplasm of other and ill-defined sites",
      },
      {
        key: "C76.0",
        en: "",
        de: "Malignant neoplasm of other and ill-defined sites: Head, face and neck",
      },
      {
        key: "C76.1",
        en: "",
        de: "Malignant neoplasm of other and ill-defined sites: Thorax",
      },
      {
        key: "C76.2",
        en: "",
        de: "Malignant neoplasm of other and ill-defined sites: Abdomen",
      },
      {
        key: "C76.3",
        en: "",
        de: "Malignant neoplasm of other and ill-defined sites: Pelvis",
      },
      {
        key: "C76.4",
        en: "",
        de: "Malignant neoplasm of other and ill-defined sites: Upper limb",
      },
      {
        key: "C76.5",
        en: "",
        de: "Malignant neoplasm of other and ill-defined sites: Lower limb",
      },
      {
        key: "C76.7",
        en: "",
        de: "Malignant neoplasm of other and ill-defined sites: Other ill-defined sites",
      },
      {
        key: "C76.8",
        en: "",
        de: "Malignant neoplasm of other and ill-defined sites: Overlapping lesion of other and ill-defined sites",
      },
      {
        key: "C77",
        en: "",
        de: "Secondary and unspecified malignant neoplasm of lymph nodes",
      },
      {
        key: "C77.0",
        en: "",
        de: "Secondary and unspecified malignant neoplasm: Lymph nodes of head, face and neck",
      },
      {
        key: "C77.1",
        en: "",
        de: "Secondary and unspecified malignant neoplasm: Intrathoracic lymph nodes",
      },
      {
        key: "C77.2",
        en: "",
        de: "Secondary and unspecified malignant neoplasm: Intra-abdominal lymph nodes",
      },
      {
        key: "C77.3",
        en: "",
        de: "Secondary and unspecified malignant neoplasm: Axillary and upper limb lymph nodes",
      },
      {
        key: "C77.4",
        en: "",
        de: "Secondary and unspecified malignant neoplasm: Inguinal and lower limb lymph nodes",
      },
      {
        key: "C77.5",
        en: "",
        de: "Secondary and unspecified malignant neoplasm: Intrapelvic lymph nodes",
      },
      {
        key: "C77.8",
        en: "",
        de: "Secondary and unspecified malignant neoplasm: Lymph nodes of multiple regions",
      },
      {
        key: "C77.9",
        en: "",
        de: "Secondary and unspecified malignant neoplasm: Lymph node, unspecified",
      },
      {
        key: "C78",
        en: "",
        de: "Secondary malignant neoplasm of respiratory and digestive organs",
      },
      {
        key: "C78.0",
        en: "",
        de: "Secondary malignant neoplasm of lung",
      },
      {
        key: "C78.1",
        en: "",
        de: "Secondary malignant neoplasm of mediastinum",
      },
      {
        key: "C78.2",
        en: "",
        de: "Secondary malignant neoplasm of pleura",
      },
      {
        key: "C78.3",
        en: "",
        de: "Secondary malignant neoplasm of other and unspecified respiratory organs",
      },
      {
        key: "C78.4",
        en: "",
        de: "Secondary malignant neoplasm of small intestine",
      },
      {
        key: "C78.5",
        en: "",
        de: "Secondary malignant neoplasm of large intestine and rectum",
      },
      {
        key: "C78.6",
        en: "",
        de: "Secondary malignant neoplasm of retroperitoneum and peritoneum",
      },
      {
        key: "C78.7",
        en: "",
        de: "Secondary malignant neoplasm of liver and intrahepatic bile duct",
      },
      {
        key: "C78.8",
        en: "",
        de: "Secondary malignant neoplasm of other and unspecified digestive organs",
      },
      {
        key: "C79",
        en: "",
        de: "Secondary malignant neoplasm of other and unspecified sites",
      },
      {
        key: "C79.0",
        en: "",
        de: "Secondary malignant neoplasm of kidney and renal pelvis",
      },
      {
        key: "C79.1",
        en: "",
        de: "Secondary malignant neoplasm of bladder and other and unspecified urinary organs",
      },
      {
        key: "C79.2",
        en: "",
        de: "Secondary malignant neoplasm of skin",
      },
      {
        key: "C79.3",
        en: "",
        de: "Secondary malignant neoplasm of brain and cerebral meninges",
      },
      {
        key: "C79.4",
        en: "",
        de: "Secondary malignant neoplasm of other and unspecified parts of nervous system",
      },
      {
        key: "C79.5",
        en: "",
        de: "Secondary malignant neoplasm of bone and bone marrow",
      },
      {
        key: "C79.6",
        en: "",
        de: "Secondary malignant neoplasm of ovary",
      },
      {
        key: "C79.7",
        en: "",
        de: "Secondary malignant neoplasm of adrenal gland",
      },
      {
        key: "C79.8",
        en: "",
        de: "Secondary malignant neoplasm of other specified sites",
      },
      {
        key: "C79.9",
        en: "",
        de: "Secondary malignant neoplasm, unspecified site",
      },
      {
        key: "C80",
        en: "",
        de: "Malignant neoplasm, without specification of site",
      },
      {
        key: "C80.0",
        en: "",
        de: "Malignant neoplasm, primary site unknown, so stated",
      },
      {
        key: "C80.9",
        en: "",
        de: "Malignant neoplasm, primary site unspecified",
      },
      {
        key: "C81",
        en: "",
        de: "Hodgkin lymphoma",
      },
      {
        key: "C81.0",
        en: "",
        de: "Nodular lymphocyte predominant Hodgkin lymphoma",
      },
      {
        key: "C81.1",
        en: "",
        de: "Nodular sclerosis classical Hodgkin lymphoma",
      },
      {
        key: "C81.2",
        en: "",
        de: "Mixed cellularity classical Hodgkin lymphoma",
      },
      {
        key: "C81.3",
        en: "",
        de: "Lymphocyte depleted classical Hodgkin lymphoma",
      },
      {
        key: "C81.4",
        en: "",
        de: "Lymphocyte-rich (classical) Hodgkin lymphoma",
      },
      {
        key: "C81.7",
        en: "",
        de: "Other classical Hodgkin lymphoma",
      },
      {
        key: "C81.9",
        en: "",
        de: "Hodgkin lymphoma, unspecified",
      },
      {
        key: "C82",
        en: "",
        de: "Follicular lymphoma",
      },
      {
        key: "C82.0",
        en: "",
        de: "Follicular lymphoma grade I",
      },
      {
        key: "C82.1",
        en: "",
        de: "Follicular lymphoma grade II",
      },
      {
        key: "C82.2",
        en: "",
        de: "Follicular lymphoma grade III, unspecified",
      },
      {
        key: "C82.3",
        en: "",
        de: "Follicular lymphoma grade IIIa",
      },
      {
        key: "C82.4",
        en: "",
        de: "Follicular lymphoma grade IIIb",
      },
      {
        key: "C82.5",
        en: "",
        de: "Diffuse follicle centre lymphoma",
      },
      {
        key: "C82.6",
        en: "",
        de: "Cutaneous follicle centre lymphoma",
      },
      {
        key: "C82.7",
        en: "",
        de: "Other types of follicular lymphoma",
      },
      {
        key: "C82.9",
        en: "",
        de: "Follicular lymphoma, unspecified",
      },
      {
        key: "C83",
        en: "",
        de: "Non-follicular lymphoma",
      },
      {
        key: "C83.0",
        en: "",
        de: "Small cell B-cell lymphoma",
      },
      {
        key: "C83.1",
        en: "",
        de: "Mantle cell lymphoma",
      },
      {
        key: "C83.3",
        en: "",
        de: "Diffuse large B-cell lymphoma",
      },
      {
        key: "C83.5",
        en: "",
        de: "Lymphoblastic (diffuse) lymphoma",
      },
      {
        key: "C83.7",
        en: "",
        de: "Burkitt lymphoma",
      },
      {
        key: "C83.8",
        en: "",
        de: "Other non-follicular lymphoma",
      },
      {
        key: "C83.9",
        en: "",
        de: "Non-follicular (diffuse) lymphoma, unspecified",
      },
      {
        key: "C84",
        en: "",
        de: "Mature T/NK-cell lymphomas",
      },
      {
        key: "C84.0",
        en: "",
        de: "Mycosis fungoides",
      },
      {
        key: "C84.1",
        en: "",
        de: "Sézary disease",
      },
      {
        key: "C84.4",
        en: "",
        de: "Peripheral T-cell lymphoma, not elsewhere classified",
      },
      {
        key: "C84.5",
        en: "",
        de: "Other mature T/NK-cell lymphomas",
      },
      {
        key: "C84.6",
        en: "",
        de: "Anaplastic large cell lymphoma, ALK-positive",
      },
      {
        key: "C84.7",
        en: "",
        de: "Anaplastic large cell lymphoma, ALK-negative",
      },
      {
        key: "C84.8",
        en: "",
        de: "Cutaneous T-cell lymphoma, unspecified",
      },
      {
        key: "C84.9",
        en: "",
        de: "Mature T/NK-cell lymphoma, unspecified",
      },
      {
        key: "C85",
        en: "",
        de: "Other and unspecified types of non-Hodgkin lymphoma",
      },
      {
        key: "C85.1",
        en: "",
        de: "B-cell lymphoma, unspecified",
      },
      {
        key: "C85.2",
        en: "",
        de: "Mediastinal (thymic) large B-cell lymphoma",
      },
      {
        key: "C85.7",
        en: "",
        de: "Other specified types of non-Hodgkin lymphoma",
      },
      {
        key: "C85.9",
        en: "",
        de: "Non-Hodgkin lymphoma, unspecified",
      },
      {
        key: "C86",
        en: "",
        de: "Other specified types of T/NK-cell lymphoma",
      },
      {
        key: "C86.0",
        en: "",
        de: "Extranodal NK/T-cell lymphoma, nasal type",
      },
      {
        key: "C86.1",
        en: "",
        de: "Hepatosplenic T-cell lymphoma",
      },
      {
        key: "C86.2",
        en: "",
        de: "Enteropathy-type (intestinal) T-cell lymphoma",
      },
      {
        key: "C86.3",
        en: "",
        de: "Subcutaneous panniculitis-like T-cell lymphoma",
      },
      {
        key: "C86.4",
        en: "",
        de: "Blastic NK-cell lymphoma",
      },
      {
        key: "C86.5",
        en: "",
        de: "Angioimmunoblastic T-cell lymphoma",
      },
      {
        key: "C86.6",
        en: "",
        de: "Primary cutaneous CD30-positive T-cell proliferations",
      },
      {
        key: "C88",
        en: "",
        de: "Malignant immunoproliferative diseases",
      },
      {
        key: "C88.0",
        en: "",
        de: "Waldenström macroglobulinaemia",
      },
      {
        key: "C88.2",
        en: "",
        de: "Other heavy chain disease",
      },
      {
        key: "C88.3",
        en: "",
        de: "Immunoproliferative small intestinal disease",
      },
      {
        key: "C88.4",
        en: "",
        de: "Extranodal marginal zone B-cell lymphoma of mucosa-associated lymphoid tissue [MALT-lyphoma]",
      },
      {
        key: "C88.7",
        en: "",
        de: "Other malignant immunoproliferative diseases",
      },
      {
        key: "C88.9",
        en: "",
        de: "Malignant immunoproliferative disease, unspecified",
      },
      {
        key: "C90",
        en: "",
        de: "Multiple myeloma and malignant plasma cell neoplasms",
      },
      {
        key: "C90.0",
        en: "",
        de: "Multiple myeloma",
      },
      {
        key: "C90.1",
        en: "",
        de: "Plasma cell leukaemia",
      },
      {
        key: "C90.2",
        en: "",
        de: "Extramedullary plasmacytoma",
      },
      {
        key: "C90.3",
        en: "",
        de: "Solitary plasmacytoma",
      },
      {
        key: "C91",
        en: "",
        de: "Lymphoid leukaemia",
      },
      {
        key: "C91.0",
        en: "",
        de: "Acute lymphoblastic leukaemia [ALL]",
      },
      {
        key: "C91.1",
        en: "",
        de: "Chronic lymphocytic leukaemia of B-cell type",
      },
      {
        key: "C91.3",
        en: "",
        de: "Prolymphocytic leukaemia of B-cell type",
      },
      {
        key: "C91.4",
        en: "",
        de: "Hairy-cell leukaemia",
      },
      {
        key: "C91.5",
        en: "",
        de: "Adult T-cell lymphoma/leukaemia [HTLV-1-associated]",
      },
      {
        key: "C91.6",
        en: "",
        de: "Prolymphocytic leukaemia of T-cell type",
      },
      {
        key: "C91.7",
        en: "",
        de: "Other lymphoid leukaemia",
      },
      {
        key: "C91.8",
        en: "",
        de: "Mature B-cell leukaemia Burkitt-type",
      },
      {
        key: "C91.9",
        en: "",
        de: "Lymphoid leukaemia, unspecified",
      },
      {
        key: "C92",
        en: "",
        de: "Myeloid leukaemia",
      },
      {
        key: "C92.0",
        en: "",
        de: "Acute myeloblastic leukaemia [AML]",
      },
      {
        key: "C92.1",
        en: "",
        de: "Chronic myeloid leukaemia [CML], BCR/ABL-positive",
      },
      {
        key: "C92.2",
        en: "",
        de: "Atypical chronic myeloid leukaemia, BCR/ABL- negative",
      },
      {
        key: "C92.3",
        en: "",
        de: "Myeloid sarcoma",
      },
      {
        key: "C92.4",
        en: "",
        de: "Acute promyelocytic leukaemia [PML]",
      },
      {
        key: "C92.5",
        en: "",
        de: "Acute myelomonocytic leukaemia",
      },
      {
        key: "C92.6",
        en: "",
        de: "Acute myeloid leukaemia with 11q23-abnormality",
      },
      {
        key: "C92.7",
        en: "",
        de: "Other myeloid leukaemia",
      },
      {
        key: "C92.8",
        en: "",
        de: "Acute myeloid leukaemia with multilineage dysplasia",
      },
      {
        key: "C92.9",
        en: "",
        de: "Myeloid leukaemia, unspecified",
      },
      {
        key: "C93",
        en: "",
        de: "Monocytic leukaemia",
      },
      {
        key: "C93.0",
        en: "",
        de: "Acute monoblastic/monocytic leukaemia",
      },
      {
        key: "C93.1",
        en: "",
        de: "Chronic myelomonocytic leukaemia",
      },
      {
        key: "C93.3",
        en: "",
        de: "Juvenile myelomonocytic leukaemia",
      },
      {
        key: "C93.7",
        en: "",
        de: "Other monocytic leukaemia",
      },
      {
        key: "C93.9",
        en: "",
        de: "Monocytic leukaemia, unspecified",
      },
      {
        key: "C94",
        en: "",
        de: "Other leukaemias of specified cell type",
      },
      {
        key: "C94.0",
        en: "",
        de: "Acute erythroid leukaemia",
      },
      {
        key: "C94.2",
        en: "",
        de: "Acute megakaryoblastic leukaemia",
      },
      {
        key: "C94.3",
        en: "",
        de: "Mast cell leukaemia",
      },
      {
        key: "C94.4",
        en: "",
        de: "Acute panmyelosis with myelofibrosis",
      },
      {
        key: "C94.6",
        en: "",
        de: "Myelodysplastic and myeloproliferative disease, not elsewhere classified",
      },
      {
        key: "C94.7",
        en: "",
        de: "Other specified leukaemias",
      },
      {
        key: "C95",
        en: "",
        de: "Leukaemia of unspecified cell type",
      },
      {
        key: "C95.0",
        en: "",
        de: "Acute leukaemia of unspecified cell type",
      },
      {
        key: "C95.1",
        en: "",
        de: "Chronic leukaemia of unspecified cell type",
      },
      {
        key: "C95.7",
        en: "",
        de: "Other leukaemia of unspecified cell type",
      },
      {
        key: "C95.9",
        en: "",
        de: "Leukaemia, unspecified",
      },
      {
        key: "C96",
        en: "",
        de: "Other and unspecified malignant neoplasms of lymphoid, haematopoietic and related tissue",
      },
      {
        key: "C96.0",
        en: "",
        de: "Multifocal and multisystemic (disseminated) Langerhans-cell histiocytosis [Letterer-Siwe disease]",
      },
      {
        key: "C96.2",
        en: "",
        de: "Malignant mast cell tumour",
      },
      {
        key: "C96.4",
        en: "",
        de: "Sarcoma of dendritic cells (accessory cells)",
      },
      {
        key: "C96.5",
        en: "",
        de: "Multifocal and unisystemic Langerhans-cell histiocytosis",
      },
      {
        key: "C96.6",
        en: "",
        de: "Unifocal Langerhans-cell histiocytosis",
      },
      {
        key: "C96.7",
        en: "",
        de: "Other specified malignant neoplasms of lymphoid, haematopoietic and related tissue",
      },
      {
        key: "C96.8",
        en: "",
        de: "Histiocytic sarcoma",
      },
      {
        key: "C96.9",
        en: "",
        de: "Malignant neoplasm of lymphoid, haematopoietic and related tissue, unspecified",
      },
  ]
);
