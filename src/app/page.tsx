'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { 
  allExams, 
  examCategories, 
  examTypes,
  type ExamConfig, 
  type Question 
} from '@/data/exams'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Flag, 
  Trash2, 
  CheckCircle2, 
  XCircle,
  AlertCircle,
  BookOpen,
  Award,
  BarChart3,
  Home as HomeIcon,
  FileText,
  Users,
  Filter,
  Calendar,
  GraduationCap,
  Building2,
  Train,
  Landmark
} from 'lucide-react'

// Types
type QuestionStatus = 'not-visited' | 'answered' | 'not-answered' | 'marked-for-review' | 'answered-and-marked'

interface UserAnswer {
  questionId: number
  selectedOption: 'A' | 'B' | 'C' | 'D' | null
  status: QuestionStatus
}

interface ExamState {
  currentSectionIndex: number
  currentQuestionIndex: number
  userAnswers: Record<number, UserAnswer>
  timeRemaining: number
  examStarted: boolean
  examEnded: boolean
  startTime: number | null
}

// Helper functions
const formatTime = (seconds: number): string => {
  const hrs = Math.floor(seconds / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

const getStatusColor = (status: QuestionStatus): string => {
  switch (status) {
    case 'answered': return 'bg-green-500 hover:bg-green-600 text-white'
    case 'not-answered': return 'bg-red-500 hover:bg-red-600 text-white'
    case 'marked-for-review': return 'bg-purple-500 hover:bg-purple-600 text-white'
    case 'answered-and-marked': return 'bg-violet-600 hover:bg-violet-700 text-white'
    default: return 'bg-gray-300 hover:bg-gray-400 text-gray-700'
  }
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'SSC': return <GraduationCap className="h-5 w-5" />
    case 'RRB': return <Train className="h-5 w-5" />
    case 'UPSC': return <Landmark className="h-5 w-5" />
    case 'State PSC': return <Building2 className="h-5 w-5" />
    default: return <BookOpen className="h-5 w-5" />
  }
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'SSC': return 'bg-blue-100 text-blue-700 border-blue-200'
    case 'RRB': return 'bg-orange-100 text-orange-700 border-orange-200'
    case 'UPSC': return 'bg-purple-100 text-purple-700 border-purple-200'
    case 'State PSC': return 'bg-green-100 text-green-700 border-green-200'
    default: return 'bg-gray-100 text-gray-700 border-gray-200'
  }
}

// Home Screen Component
function HomeScreen({ onSelectExam }: { onSelectExam: (exam: ExamConfig) => void }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  
  const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015]
  
  // Filter exams
  const filteredExams = allExams.filter(exam => {
    const matchesCategory = selectedCategory === 'all' || exam.category === selectedCategory
    const matchesYear = selectedYear === 'all' || exam.year === selectedYear
    const matchesSearch = exam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         exam.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesYear && matchesSearch
  })

  // Group exams by category
  const groupedExams = filteredExams.reduce((acc, exam) => {
    if (!acc[exam.category]) acc[exam.category] = []
    acc[exam.category].push(exam)
    return acc
  }, {} as Record<string, ExamConfig[]>)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2.5 rounded-xl shadow-lg">
                <img src="/logo.svg" alt="Mock Exams Platform" className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Mock Exams Platform</h1>
                <p className="text-xs text-gray-500">Practice mock exams and past papers for SSC, RRB, UPSC, and state PSC.</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Badge className="bg-blue-600 text-white px-3 py-1">
                {allExams.length}+ Mock Tests
              </Badge>
              <Badge variant="outline" className="text-sm px-3 py-1">
                10 Years Papers
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {examCategories.slice(1).map(cat => (
            <Card key={cat.id} className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedCategory(cat.id)}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${getCategoryColor(cat.id)}`}>
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{cat.count}</p>
                    <p className="text-xs text-gray-500">{cat.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters Section */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Filters:</span>
              </div>
              
              {/* Search */}
              <input
                type="text"
                placeholder="Search exams..."
                className="flex-1 min-w-[200px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {examCategories.map(cat => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={selectedCategory === cat.id ? 'bg-blue-600' : ''}
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>
              
              {/* Year Filter */}
              <select
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              >
                <option value="all">All Years</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Exams by Category */}
        {Object.entries(groupedExams).map(([category, exams]) => (
          <div key={category} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${getCategoryColor(category)}`}>
                {getCategoryIcon(category)}
              </div>
              <h2 className="text-xl font-bold">{category} Exams</h2>
              <Badge variant="secondary">{exams.length} tests</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {exams.map((exam) => (
                <Card 
                  key={exam.id} 
                  className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-500 group"
                  onClick={() => onSelectExam(exam)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {exam.year}
                      </Badge>
                      <Badge className={getCategoryColor(category)}>
                        {exam.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mt-2 group-hover:text-blue-600 transition-colors">
                      {exam.name}
                    </CardTitle>
                    <CardDescription className="text-xs line-clamp-1">{exam.fullName}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                      <div className="flex items-center gap-1 text-gray-600">
                        <FileText className="h-4 w-4" />
                        <span>{exam.totalQuestions} Qs</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Award className="h-4 w-4" />
                        <span>{exam.totalMarks} Marks</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{exam.durationMinutes} min</span>
                      </div>
                      <div className="flex items-center gap-1 text-red-500">
                        <AlertCircle className="h-4 w-4" />
                        <span>-{exam.negativeMarking}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {exam.sections.map((section) => (
                        <Badge key={section.id} variant="outline" className="text-xs">
                          {section.questions.length} Qs
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:bg-indigo-600">
                      Start Test
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {filteredExams.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-600">No exams found</h3>
            <p className="text-gray-500">Try adjusting your filters</p>
          </div>
        )}

        {/* Features Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-500" />
            Why Practice With Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">Real Exam Pattern</h4>
                <p className="text-sm text-gray-500">Exact interface as actual exams</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Calendar className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium">10 Years Papers</h4>
                <p className="text-sm text-gray-500">2015-2024 previous year papers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Clock className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium">Timer & Auto-submit</h4>
                <p className="text-sm text-gray-500">Real-time countdown timer</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-orange-100 p-2 rounded-lg">
                <BarChart3 className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h4 className="font-medium">Detailed Analytics</h4>
                <p className="text-sm text-gray-500">Section-wise performance review</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Instructions Screen Component
function InstructionsScreen({ 
  exam, 
  onAgree, 
  onBack 
}: { 
  exam: ExamConfig, 
  onAgree: () => void, 
  onBack: () => void 
}) {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back
              </Button>
              <div>
                <h1 className="text-lg font-bold text-gray-900">{exam.name}</h1>
                <p className="text-xs text-gray-500">Instructions</p>
              </div>
            </div>
            <Badge className={getCategoryColor(exam.category)}>{exam.category} - {exam.year}</Badge>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
            <CardTitle className="text-xl">General Instructions</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {/* Exam Overview */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-3">Exam Overview</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">{exam.totalQuestions}</div>
                    <div className="text-sm text-gray-500">Total Questions</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-green-600">{exam.totalMarks}</div>
                    <div className="text-sm text-gray-500">Total Marks</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">{exam.durationMinutes}</div>
                    <div className="text-sm text-gray-500">Minutes</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-red-600">-{exam.negativeMarking}</div>
                    <div className="text-sm text-gray-500">Negative Marking</div>
                  </div>
                </div>
              </div>

              {/* Sections */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Sections</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left p-3 rounded-tl-lg">Section</th>
                        <th className="text-center p-3">Questions</th>
                        <th className="text-center p-3">Marks</th>
                        <th className="text-center p-3 rounded-tr-lg">Per Question</th>
                      </tr>
                    </thead>
                    <tbody>
                      {exam.sections.map((section, idx) => (
                        <tr key={section.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="p-3 font-medium">{section.name}</td>
                          <td className="text-center p-3">{section.questions.length}</td>
                          <td className="text-center p-3">{section.questions.length * section.marksPerQuestion}</td>
                          <td className="text-center p-3">+{section.marksPerQuestion}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Instructions List */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Important Instructions</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>The test consists of <strong>{exam.sections.length} sections</strong> covering different subjects.</li>
                  <li>Each question has <strong>4 options</strong>. Select the most appropriate answer.</li>
                  <li>For each correct answer, you will be awarded <strong>+{exam.sections[0].marksPerQuestion} marks</strong>.</li>
                  <li>For each wrong answer, <strong>{exam.negativeMarking} marks</strong> will be deducted.</li>
                  <li>You can navigate between questions using the <strong>Previous</strong> and <strong>Next</strong> buttons.</li>
                  <li>Click <strong>Save & Next</strong> to save your answer and move to the next question.</li>
                  <li>Click <strong>Mark for Review</strong> to mark a question for later review.</li>
                  <li>Click <strong>Clear Response</strong> to deselect your chosen answer.</li>
                  <li>The <strong>Question Palette</strong> shows the status of all questions.</li>
                  <li>The timer will start automatically. The test will auto-submit when time runs out.</li>
                </ol>
              </div>

              {/* Question Status Legend */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Question Status Legend</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-green-500"></div>
                    <span className="text-sm">Answered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-red-500"></div>
                    <span className="text-sm">Not Answered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-purple-500"></div>
                    <span className="text-sm">Marked for Review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-violet-600"></div>
                    <span className="text-sm">Answered & Marked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-gray-300"></div>
                    <span className="text-sm">Not Visited</span>
                  </div>
                </div>
              </div>

              {/* Agreement */}
              <div className="border-t pt-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <Checkbox 
                    checked={agreed} 
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  />
                  <span className="text-sm">
                    I have read and understood all the instructions. I agree to proceed with the test.
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={onBack}>
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
                <Button 
                  className="bg-green-600 hover:bg-green-700"
                  disabled={!agreed}
                  onClick={onAgree}
                >
                  I am Ready to Begin
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

// Exam Interface Component
function ExamInterface({ 
  exam, 
  examState, 
  onUpdateState,
  onSubmit 
}: { 
  exam: ExamConfig, 
  examState: ExamState, 
  onUpdateState: (updates: Partial<ExamState>) => void,
  onSubmit: () => void 
}) {
  const [showSubmitDialog, setShowSubmitDialog] = useState(false)
  const [showTimeWarning, setShowTimeWarning] = useState(false)

  const currentSection = exam.sections[examState.currentSectionIndex]
  const currentQuestion = currentSection?.questions[examState.currentQuestionIndex]

  const getQuestionStatus = useCallback((questionId: number): QuestionStatus => {
    const answer = examState.userAnswers[questionId]
    return answer?.status || 'not-visited'
  }, [examState.userAnswers])

  const getAllQuestions = useCallback(() => {
    const questions: { question: Question; sectionId: string; sectionName: string; globalIndex: number }[] = []
    let globalIdx = 0
    exam.sections.forEach(section => {
      section.questions.forEach(q => {
        questions.push({ 
          question: q, 
          sectionId: section.id, 
          sectionName: section.name,
          globalIndex: globalIdx++
        })
      })
    })
    return questions
  }, [exam.sections])

  const getGlobalQuestionNumber = useCallback(() => {
    let count = 0
    for (let i = 0; i < examState.currentSectionIndex; i++) {
      count += exam.sections[i].questions.length
    }
    return count + examState.currentQuestionIndex + 1
  }, [exam.sections, examState.currentSectionIndex, examState.currentQuestionIndex])

  const handleSelectOption = (option: 'A' | 'B' | 'C' | 'D') => {
    if (!currentQuestion) return
    onUpdateState({
      userAnswers: {
        ...examState.userAnswers,
        [currentQuestion.id]: {
          questionId: currentQuestion.id,
          selectedOption: option,
          status: 'answered'
        }
      }
    })
  }

  const handleSaveAndNext = () => navigateNext()

  const handleMarkForReview = () => {
    if (!currentQuestion) return
    const currentStatus = getQuestionStatus(currentQuestion.id)
    const newStatus: QuestionStatus = currentStatus === 'answered' ? 'answered-and-marked' : 'marked-for-review'
    onUpdateState({
      userAnswers: {
        ...examState.userAnswers,
        [currentQuestion.id]: {
          questionId: currentQuestion.id,
          selectedOption: examState.userAnswers[currentQuestion.id]?.selectedOption || null,
          status: newStatus
        }
      }
    })
    navigateNext()
  }

  const handleClearResponse = () => {
    if (!currentQuestion) return
    onUpdateState({
      userAnswers: {
        ...examState.userAnswers,
        [currentQuestion.id]: {
          questionId: currentQuestion.id,
          selectedOption: null,
          status: 'not-answered'
        }
      }
    })
  }

  const navigateNext = () => {
    if (!currentSection) return
    const nextQuestionIndex = examState.currentQuestionIndex + 1
    if (nextQuestionIndex < currentSection.questions.length) {
      onUpdateState({ currentQuestionIndex: nextQuestionIndex })
    } else if (examState.currentSectionIndex < exam.sections.length - 1) {
      onUpdateState({ 
        currentSectionIndex: examState.currentSectionIndex + 1,
        currentQuestionIndex: 0
      })
    }
  }

  const navigatePrevious = () => {
    if (examState.currentQuestionIndex > 0) {
      onUpdateState({ currentQuestionIndex: examState.currentQuestionIndex - 1 })
    } else if (examState.currentSectionIndex > 0) {
      const prevSection = exam.sections[examState.currentSectionIndex - 1]
      onUpdateState({ 
        currentSectionIndex: examState.currentSectionIndex - 1,
        currentQuestionIndex: prevSection.questions.length - 1
      })
    }
  }

  const jumpToQuestion = (sectionIndex: number, questionIndex: number) => {
    onUpdateState({
      currentSectionIndex: sectionIndex,
      currentQuestionIndex: questionIndex
    })
  }

  const getStats = useCallback(() => {
    const allQuestions = getAllQuestions()
    let answered = 0, notAnswered = 0, markedForReview = 0, notVisited = 0
    allQuestions.forEach(({ question }) => {
      const status = getQuestionStatus(question.id)
      switch (status) {
        case 'answered':
        case 'answered-and-marked': answered++; break
        case 'not-answered': notAnswered++; break
        case 'marked-for-review': markedForReview++; break
        default: notVisited++
      }
    })
    return { answered, notAnswered, markedForReview, notVisited }
  }, [getAllQuestions, getQuestionStatus])

  useEffect(() => {
    if (examState.timeRemaining <= 300 && examState.timeRemaining > 299) {
      setShowTimeWarning(true)
    }
  }, [examState.timeRemaining])

  const stats = getStats()
  const globalQNum = getGlobalQuestionNumber()
  const currentAnswer = currentQuestion ? examState.userAnswers[currentQuestion.id]?.selectedOption : null

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`px-3 py-1.5 rounded ${getCategoryColor(exam.category)}`}>
                <span className="font-semibold text-sm">{exam.name}</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                <span>Candidate</span>
              </div>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              examState.timeRemaining <= 300 ? 'bg-red-100 animate-pulse' : 'bg-blue-50'
            }`}>
              <Clock className={`h-5 w-5 ${examState.timeRemaining <= 300 ? 'text-red-600' : 'text-blue-600'}`} />
              <span className={`font-mono text-lg font-bold ${
                examState.timeRemaining <= 300 ? 'text-red-600' : 'text-blue-600'
              }`}>
                {formatTime(examState.timeRemaining)}
              </span>
            </div>
          </div>
        </div>
        <div className="border-t bg-gray-50 overflow-x-auto">
          <div className="flex">
            {exam.sections.map((section, idx) => {
              const sectionAnswered = section.questions.filter(q => {
                const status = getQuestionStatus(q.id)
                return status === 'answered' || status === 'answered-and-marked'
              }).length
              return (
                <button
                  key={section.id}
                  onClick={() => jumpToQuestion(idx, 0)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    idx === examState.currentSectionIndex
                      ? 'border-blue-600 text-blue-600 bg-white'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {section.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {sectionAnswered}/{section.questions.length}
                  </Badge>
                </button>
              )
            })}
          </div>
        </div>
      </header>

      {showTimeWarning && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
          <Alert className="bg-red-500 text-white border-red-600 shadow-lg">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="font-medium">
              Only 5 minutes remaining! Please submit your test.
            </AlertDescription>
            <Button variant="ghost" size="sm" className="text-white hover:bg-red-600 ml-2"
                    onClick={() => setShowTimeWarning(false)}>
              Dismiss
            </Button>
          </Alert>
        </div>
      )}

      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 p-4 lg:p-6">
          <Card className="shadow-lg">
            <CardHeader className="bg-gray-50 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge className="bg-blue-600 text-lg px-3 py-1">Q.{globalQNum}</Badge>
                  <span className="text-sm text-gray-500">{currentSection?.name}</span>
                </div>
                <Badge variant="outline" className="text-sm">Marks: +{currentSection?.marksPerQuestion || 2}</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              {currentQuestion && (
                <>
                  <div className="mb-6">
                    <p className="text-lg leading-relaxed">{currentQuestion.text}</p>
                  </div>
                  <RadioGroup
                    value={currentAnswer || ''}
                    onValueChange={(value) => handleSelectOption(value as 'A' | 'B' | 'C' | 'D')}
                    className="space-y-3"
                  >
                    {(['A', 'B', 'C', 'D'] as const).map((option) => (
                      <div
                        key={option}
                        className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          currentAnswer === option
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => handleSelectOption(option)}
                      >
                        <RadioGroupItem value={option} id={`option-${option}`} />
                        <Label htmlFor={`option-${option}`} className="flex-1 cursor-pointer text-base">
                          <span className="font-semibold mr-2">{option}.</span>
                          {currentQuestion.options[option]}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  <div className="mt-6 flex items-center gap-2">
                    <span className="text-sm text-gray-500">Status:</span>
                    <Badge className={`
                      ${getQuestionStatus(currentQuestion.id) === 'answered' ? 'bg-green-500' : ''}
                      ${getQuestionStatus(currentQuestion.id) === 'not-answered' ? 'bg-red-500' : ''}
                      ${getQuestionStatus(currentQuestion.id) === 'marked-for-review' ? 'bg-purple-500' : ''}
                      ${getQuestionStatus(currentQuestion.id) === 'answered-and-marked' ? 'bg-violet-600' : ''}
                      ${getQuestionStatus(currentQuestion.id) === 'not-visited' ? 'bg-gray-400' : ''}
                    `}>
                      {getQuestionStatus(currentQuestion.id).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </Badge>
                  </div>
                </>
              )}
            </CardContent>
            <div className="border-t bg-gray-50 p-4">
              <div className="flex flex-wrap gap-3 justify-between">
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" onClick={navigatePrevious}
                          disabled={examState.currentSectionIndex === 0 && examState.currentQuestionIndex === 0}>
                    <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                  </Button>
                  <Button variant="outline" onClick={handleClearResponse} disabled={!currentAnswer}>
                    <Trash2 className="h-4 w-4 mr-1" /> Clear Response
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="secondary" onClick={handleMarkForReview}
                          className="bg-purple-600 hover:bg-purple-700 text-white">
                    <Flag className="h-4 w-4 mr-1" /> Mark for Review & Next
                  </Button>
                  <Button onClick={handleSaveAndNext} className="bg-green-600 hover:bg-green-700">
                    Save & Next <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:w-80 bg-white border-l shadow-lg">
          <div className="sticky top-36">
            <div className="p-4 border-b bg-gray-50">
              <h3 className="font-semibold text-lg">Question Palette</h3>
              <div className="mt-3 grid grid-cols-5 gap-1 text-xs">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-6 h-6 rounded bg-green-500"></div>
                  <span className="text-gray-600">{stats.answered}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-6 h-6 rounded bg-red-500"></div>
                  <span className="text-gray-600">{stats.notAnswered}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-6 h-6 rounded bg-purple-500"></div>
                  <span className="text-gray-600">{stats.markedForReview}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-6 h-6 rounded bg-gray-300"></div>
                  <span className="text-gray-600">{stats.notVisited}</span>
                </div>
              </div>
            </div>
            <ScrollArea className="h-[calc(100vh-280px)]">
              <div className="p-4 space-y-4">
                {exam.sections.map((section, sectionIdx) => (
                  <div key={section.id}>
                    <h4 className="text-sm font-medium text-gray-600 mb-2">{section.name}</h4>
                    <div className="grid grid-cols-5 gap-1.5">
                      {section.questions.map((question, qIdx) => {
                        const status = getQuestionStatus(question.id)
                        const isCurrentQuestion = 
                          sectionIdx === examState.currentSectionIndex && 
                          qIdx === examState.currentQuestionIndex
                        return (
                          <button
                            key={question.id}
                            onClick={() => jumpToQuestion(sectionIdx, qIdx)}
                            className={`w-10 h-10 rounded text-sm font-medium transition-all
                              ${getStatusColor(status)}
                              ${isCurrentQuestion ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
                          >
                            {qIdx + 1}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t bg-gray-50">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => setShowSubmitDialog(true)}>
                Submit Test
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit Test?</DialogTitle>
            <DialogDescription>Are you sure you want to submit your test?</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{stats.answered}</div>
                <div className="text-sm text-gray-600">Answered</div>
              </div>
              <div className="bg-red-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{stats.notAnswered + stats.notVisited}</div>
                <div className="text-sm text-gray-600">Not Answered</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{stats.markedForReview}</div>
                <div className="text-sm text-gray-600">Marked for Review</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="text-2xl font-bold text-gray-600">{exam.totalQuestions}</div>
                <div className="text-sm text-gray-600">Total Questions</div>
              </div>
            </div>
            {(stats.notAnswered + stats.notVisited) > 0 && (
              <Alert className="mt-4 bg-yellow-50 border-yellow-200">
                <AlertCircle className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-700">
                  You have {stats.notAnswered + stats.notVisited} unanswered questions.
                </AlertDescription>
              </Alert>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSubmitDialog(false)}>Continue Test</Button>
            <Button className="bg-red-600 hover:bg-red-700" onClick={onSubmit}>Submit Anyway</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Results Screen Component
function ResultsScreen({ 
  exam, 
  examState,
  onRetry,
  onHome 
}: { 
  exam: ExamConfig,
  examState: ExamState,
  onRetry: () => void,
  onHome: () => void 
}) {
  const [showReview, setShowReview] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)

  const calculateResults = useCallback(() => {
    let correct = 0, wrong = 0, unanswered = 0, totalMarks = 0, obtainedMarks = 0
    const sectionResults = exam.sections.map(section => {
      let sectionCorrect = 0, sectionWrong = 0, sectionUnanswered = 0, sectionObtained = 0
      section.questions.forEach(question => {
        const userAnswer = examState.userAnswers[question.id]
        const selectedOption = userAnswer?.selectedOption
        if (!selectedOption) {
          sectionUnanswered++
          unanswered++
        } else if (selectedOption === question.correctAnswer) {
          sectionCorrect++
          correct++
          sectionObtained += section.marksPerQuestion
          obtainedMarks += section.marksPerQuestion
        } else {
          sectionWrong++
          wrong++
          sectionObtained -= exam.negativeMarking
          obtainedMarks -= exam.negativeMarking
        }
      })
      return {
        sectionId: section.id,
        sectionName: section.name,
        totalQuestions: section.questions.length,
        correct: sectionCorrect,
        wrong: sectionWrong,
        unanswered: sectionUnanswered,
        marksObtained: Math.max(0, sectionObtained),
        maxMarks: section.questions.length * section.marksPerQuestion
      }
    })
    totalMarks = exam.totalMarks
    const percentage = ((obtainedMarks / totalMarks) * 100).toFixed(2)
    const passed = parseFloat(percentage) >= exam.passingPercentage
    return { correct, wrong, unanswered, totalMarks, obtainedMarks: Math.max(0, obtainedMarks), percentage, passed, sectionResults }
  }, [exam, examState.userAnswers])

  const results = calculateResults()
  const timeTaken = exam.durationMinutes * 60 - examState.timeRemaining

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-yellow-500" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Test Results</h1>
                <p className="text-sm text-gray-500">{exam.name}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={onHome}>
                <HomeIcon className="h-4 w-4 mr-1" /> Home
              </Button>
              <Button onClick={onRetry}>Retry Test</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <Card className="shadow-lg mb-6">
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${
                results.passed ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {results.passed ? (
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                ) : (
                  <XCircle className="h-12 w-12 text-red-600" />
                )}
              </div>
              <h2 className={`text-2xl font-bold mt-4 ${results.passed ? 'text-green-600' : 'text-red-600'}`}>
                {results.passed ? 'Congratulations! You Passed!' : 'Keep Practicing!'}
              </h2>
              <p className="text-gray-500 mt-1">
                {results.passed 
                  ? `You scored above ${exam.passingPercentage}% passing marks` 
                  : `You need ${exam.passingPercentage}% to pass`}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">{results.obtainedMarks}</div>
                <div className="text-sm text-gray-600">Marks Obtained</div>
                <div className="text-xs text-gray-400">out of {results.totalMarks}</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">{results.percentage}%</div>
                <div className="text-sm text-gray-600">Percentage</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">{results.correct}</div>
                <div className="text-sm text-gray-600">Correct</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-3xl font-bold text-red-600">{results.wrong}</div>
                <div className="text-sm text-gray-600">Wrong</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Overall Score</span>
                <span className="font-medium">{results.percentage}%</span>
              </div>
              <Progress value={parseFloat(results.percentage)} className="h-3" />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Time Taken: {formatTime(timeTaken)}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>{results.unanswered} Unanswered</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Section-wise Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {results.sectionResults.map((section) => {
                const percentage = ((section.marksObtained / section.maxMarks) * 100).toFixed(0)
                return (
                  <div key={section.sectionId} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{section.sectionName}</h4>
                      <Badge variant="outline">{percentage}%</Badge>
                    </div>
                    <Progress value={parseFloat(percentage)} className="h-2 mb-3" />
                    <div className="grid grid-cols-4 gap-2 text-sm text-center">
                      <div className="bg-gray-50 rounded p-2">
                        <div className="font-semibold">{section.totalQuestions}</div>
                        <div className="text-xs text-gray-500">Total</div>
                      </div>
                      <div className="bg-green-50 rounded p-2">
                        <div className="font-semibold text-green-600">{section.correct}</div>
                        <div className="text-xs text-gray-500">Correct</div>
                      </div>
                      <div className="bg-red-50 rounded p-2">
                        <div className="font-semibold text-red-600">{section.wrong}</div>
                        <div className="text-xs text-gray-500">Wrong</div>
                      </div>
                      <div className="bg-blue-50 rounded p-2">
                        <div className="font-semibold text-blue-600">{section.marksObtained}</div>
                        <div className="text-xs text-gray-500">Marks</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="pt-6">
            <Button variant="outline" className="w-full" onClick={() => setShowReview(true)}>
              <FileText className="h-4 w-4 mr-2" /> Review All Questions
            </Button>
          </CardContent>
        </Card>
      </main>

      <Dialog open={showReview} onOpenChange={setShowReview}>
        <DialogContent className="max-w-3xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle>Question Review</DialogTitle>
            <DialogDescription>Review your answers and see the correct solutions</DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[60vh]">
            <div className="space-y-4 pr-4">
              {exam.sections.map((section, sectionIdx) => (
                <div key={section.id}>
                  <h3 className="font-semibold text-lg mb-3 sticky top-0 bg-white py-2">{section.name}</h3>
                  <div className="space-y-3">
                    {section.questions.map((question, qIdx) => {
                      const userAnswer = examState.userAnswers[question.id]
                      const selectedOption = userAnswer?.selectedOption
                      const isCorrect = selectedOption === question.correctAnswer
                      const isUnanswered = !selectedOption
                      const globalNum = exam.sections.slice(0, sectionIdx).reduce((acc, s) => acc + s.questions.length, 0) + qIdx + 1
                      return (
                        <Card key={question.id}
                              className={`cursor-pointer transition-all ${selectedQuestion === question.id ? 'ring-2 ring-blue-500' : ''}`}
                              onClick={() => setSelectedQuestion(question.id)}>
                          <CardContent className="pt-4">
                            <div className="flex items-start gap-3">
                              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                                ${isCorrect ? 'bg-green-500 text-white' : ''}
                                ${isUnanswered ? 'bg-gray-300 text-gray-600' : ''}
                                ${!isCorrect && !isUnanswered ? 'bg-red-500 text-white' : ''}`}>
                                {globalNum}
                              </div>
                              <div className="flex-1">
                                <p className="text-sm mb-2">{question.text}</p>
                                {selectedQuestion === question.id && (
                                  <div className="mt-3 space-y-2">
                                    {(['A', 'B', 'C', 'D'] as const).map((opt) => {
                                      const isCorrectOption = opt === question.correctAnswer
                                      const isSelectedOption = opt === selectedOption
                                      return (
                                        <div key={opt}
                                             className={`p-2 rounded text-sm ${
                                               isCorrectOption ? 'bg-green-100 border border-green-300' : ''
                                             } ${isSelectedOption && !isCorrectOption ? 'bg-red-100 border border-red-300' : ''
                                             } ${!isCorrectOption && !isSelectedOption ? 'bg-gray-50' : ''}`}>
                                          <span className="font-medium">{opt}.</span> {question.options[opt]}
                                          {isCorrectOption && <span className="ml-2 text-green-600 font-medium">(Correct)</span>}
                                          {isSelectedOption && !isCorrectOption && <span className="ml-2 text-red-600 font-medium">(Your Answer)</span>}
                                        </div>
                                      )
                                    })}
                                  </div>
                                )}
                                {!selectedQuestion && (
                                  <div className="flex items-center gap-4 text-xs">
                                    {isCorrect && <span className="text-green-600 flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Correct</span>}
                                    {!isCorrect && !isUnanswered && <span className="text-red-600 flex items-center gap-1"><XCircle className="h-3 w-3" /> Wrong</span>}
                                    {isUnanswered && <span className="text-gray-500">Not Answered</span>}
                                    <span className="text-gray-400">Correct: {question.correctAnswer}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <DialogFooter>
            <Button onClick={() => setShowReview(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

// Main App Component
export default function Home() {
  const [selectedExam, setSelectedExam] = useState<ExamConfig | null>(null)
  const [screen, setScreen] = useState<'home' | 'instructions' | 'exam' | 'results'>('home')
  const [examState, setExamState] = useState<ExamState>({
    currentSectionIndex: 0,
    currentQuestionIndex: 0,
    userAnswers: {},
    timeRemaining: 0,
    examStarted: false,
    examEnded: false,
    startTime: null
  })

  const startExam = useCallback((exam: ExamConfig) => {
    const initialState: ExamState = {
      currentSectionIndex: 0,
      currentQuestionIndex: 0,
      userAnswers: {},
      timeRemaining: exam.durationMinutes * 60,
      examStarted: true,
      examEnded: false,
      startTime: Date.now()
    }
    exam.sections.forEach(section => {
      section.questions.forEach(question => {
        initialState.userAnswers[question.id] = {
          questionId: question.id,
          selectedOption: null,
          status: 'not-visited'
        }
      })
    })
    setExamState(initialState)
    setSelectedExam(exam)
    setScreen('exam')
  }, [])

  useEffect(() => {
    if (screen !== 'exam' || !examState.examStarted || examState.examEnded) return
    const timer = setInterval(() => {
      setExamState(prev => {
        if (prev.timeRemaining <= 1) return { ...prev, timeRemaining: 0, examEnded: true }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [screen, examState.examStarted, examState.examEnded])

  const prevExamEndedRef = useRef(false)
  useEffect(() => {
    if (examState.examEnded && !prevExamEndedRef.current && screen === 'exam') {
      prevExamEndedRef.current = true
      const navigationTimer = setTimeout(() => setScreen('results'), 500)
      return () => clearTimeout(navigationTimer)
    }
  }, [examState.examEnded, screen])

  const handleSelectExam = (exam: ExamConfig) => {
    setSelectedExam(exam)
    setScreen('instructions')
  }

  const handleStartExam = () => {
    if (selectedExam) startExam(selectedExam)
  }

  const handleSubmit = () => {
    setExamState(prev => ({ ...prev, examEnded: true }))
    setScreen('results')
  }

  const handleRetry = () => {
    if (selectedExam) startExam(selectedExam)
  }

  const handleHome = () => {
    setSelectedExam(null)
    setScreen('home')
    setExamState({
      currentSectionIndex: 0,
      currentQuestionIndex: 0,
      userAnswers: {},
      timeRemaining: 0,
      examStarted: false,
      examEnded: false,
      startTime: null
    })
  }

  return (
    <>
      {screen === 'home' && <HomeScreen onSelectExam={handleSelectExam} />}
      {screen === 'instructions' && selectedExam && (
        <InstructionsScreen exam={selectedExam} onAgree={handleStartExam} onBack={handleHome} />
      )}
      {screen === 'exam' && selectedExam && (
        <ExamInterface exam={selectedExam} examState={examState}
                       onUpdateState={(updates) => setExamState(prev => ({ ...prev, ...updates }))}
                       onSubmit={handleSubmit} />
      )}
      {screen === 'results' && selectedExam && (
        <ResultsScreen exam={selectedExam} examState={examState} onRetry={handleRetry} onHome={handleHome} />
      )}
    </>
  )
}
