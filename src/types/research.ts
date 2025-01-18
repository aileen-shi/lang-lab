import fig1 from "../assets/images/fig1.jpg";
import fig2 from "../assets/images/fig2.jpg";
import fig3 from "../assets/images/fig3.jpg";
import fig4 from "../assets/images/fig4.jpg";

export interface Figure {
  image: string;
  caption: string;
}

export interface Research {
  title: string;
  body: string;
  figures: Figure[];
}

const ResearchData: Research[] = [
  {
    title: "Cellular and Molecular Mechanisms of Sensorineural Hearing Loss",
    body: "Genetically modified mouse models and human inner ear tissues have been  used for understanding the cellular and molecular mechanisms of auditory nerve survival and degeneration in several pathological conditions,  including aging, exposure to noise and ototoxic drugs and genetic  defects. We focus on the functional roles of glial cell dysfunction,  neural crest cell associated transcription factors, RNA binding  proteins, complement system, and their related regulatory networks for  enhancing remyelination, preventing or protecting the auditory nerve  from degeneration and promoting auditory nerve survival and functional  recovery after cochlear injury. This translational research program  provides an outstanding training opportunity for (1) cutting-edge  cellular and molecular procedures in hearing research such as molecular  imaging of living cochlear cells, 3D cell culture assay, and RNA-seq  analysis of the degenerative cochlea; (2) processing and examination of  mouse and human temporal bone tissues; (3) contemporary  histopathological and high-resolution imaging techniques to assay human  and animal inner ear specimens; and 4) evaluation of auditory function  using electrophysiological techniques including the measurements of  auditory nerve compound action potentials, spontaneous activities of  single auditory nerve fiber, and auditory brainstem responses. The  research program has been supported by grants from NIH/NIDCD for more  than 20 years.",
    figures: [
      {
        image: fig1,
        caption:
          "Figure 1. Axon-glial junctions in the auditory nerve of young adult mice.",
      },
      {
        image: fig2,
        caption:
          "Figure 2. Noise exposure induced pathophysiological alterations in young adult CBA/CaJ mice.",
      },
    ],
  },
  {
    title: "Peripheral Auditory System Deficits and Autism-Like Behaviors",
    body: "This is an exciting and newly developed project, which addresses the  novel hypothesis that abnormal macrophage-related activities, resulting  from gene deficiency, lead to hearing loss and that these changes may be associated with communication impairment in Autism Spectrum Disorder  (ASD) and other neurodevelopmental disorders. For example, mutations or  deletions in the MEF2C gene have recently been linked to ASD. In  collaboration with Dr. Christopher Cowan from the Department of  Neuroscience our experiments revealed that Mef2c is highly expressed in  cochlear macrophages in postnatal mice and that Mef2c hypofunction  results in auditory nerve functional decline and hearing loss. This  research is now supported by a research grant from the Simmons  Foundation (SFARI Pilot Award) and an R01 grant from NIH/NIDCD.",
    figures: [
      {
        image: fig3,
        caption:
          "Figure 3. Expression of MEF2C in cochlear macrophages within the auditory nerve (AN) of postnatal mice.",
      },
    ],
  },
  {
    title: "Adult Stem/Progenitor Cell and Auditory Nerve Repair",
    body: "Our research on isolation of adult neural stem/progenitor cells from the adult mouse auditory nerve is aimed at replacing damaged spiral  ganglion neurons, preventing neuron degeneration and promoting auditory  functional recovery. Several lines of studies are ongoing with a focus  on remyelination and de-differentiation of adult glial cells after acute auditory nerve injury resulting from noise- or ototoxic drug-exposure. A variety of advanced methods are employed to 1) isolate and expand  neural stem/progenitor cells; 2) purify and characterize neural  stem/progenitor cells using transgenic mouse models and  fluorescence-activated cell sorting; and 3) identify the molecular  characteristics of neural stem/progenitor cells using next generation  sequencing, gene expression profiling at the single cell level (e.g.,  single cell RNA-seq), complementary proteomics assays and super  resolution imaging analysis.",
    figures: [
      {
        image: fig4,
        caption:
          "Figure 4.  Neural crest-derived stem cells (NCSCs) generated  from adult mouse cochlear tissues and human CD 34+ bone marrow cells.",
      },
    ],
  },
];

export default ResearchData;
