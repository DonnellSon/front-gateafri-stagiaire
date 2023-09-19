import React, { useContext } from 'react'
import './JobFindingHome.css'
import { Search, PinMap, Briefcase } from 'react-bootstrap-icons'
import Avatar from '../../components/Avatar/Avatar'
import JobCard from '../../components/JobCard/JobCard'
import { Plus } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import JobFindingSearchBar from '../../components/JobFindingSearchbar/JobFindingSearchbar'
import JobDetails from '../../components/JobDetails/JobDetails'
import MediaContext from '../../context/MediaContext'
import { DESKTOP } from '../../constants/MediaTypeConstants'
const JobFindingHome = () => {
    const { deviceType } = useContext(MediaContext)
    return (
        <>
            <JobFindingSearchBar />
            <main className='job-finding-home flex justify-content-between gap-20'>
                {
                    deviceType === DESKTOP ?
                        <div className="left">
                            <form action="">
                                <h4>Creer une offre d'emplois</h4>
                                <span>Trouver des préstataires en publiant une offre d'emplois</span>
                                <input type="text" className="add-job-input" placeholder='Titre' />
                                <Link to='/emplois/nouveau' className='btn-purple'><Plus size={25} /> Creer une offre d'emplois</Link>
                            </form>
                            <h4>Type de travail</h4>
                            <ul>
                                <li><input type="checkbox" name="" id="" /> Temps plein</li>
                                <li><input type="checkbox" name="" id="" /> Temps partiel</li>
                                <li><input type="checkbox" name="" id="" /> Teletravail</li>
                                <li><input type="checkbox" name="" id="" /> Stage</li>
                            </ul>
                            <h4>Grade</h4>
                            <ul>
                                <li><input type="checkbox" name="" id="" /> Etudiant</li>
                                <li><input type="checkbox" name="" id="" /> Junior</li>
                                <li><input type="checkbox" name="" id="" /> Senior</li>
                            </ul>
                            <h4>Pretention Salariale</h4>
                            <ul>
                                <li><input type="checkbox" name="" id="" /> Temps plein</li>
                                <li><input type="checkbox" name="" id="" /> Temps partiel</li>
                                <li><input type="checkbox" name="" id="" /> Teletravail</li>
                                <li><input type="checkbox" name="" id="" /> Stage</li>
                            </ul>
                        </div> : ""
                }
                <div className="center">
                    <div className="job-list">
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                    </div>
                </div>
                {
                    deviceType === DESKTOP ?
                        <div className="right">
                            <JobDetails />
                        </div> : ""
                }

            </main>
        </>
    )
}

export default JobFindingHome
